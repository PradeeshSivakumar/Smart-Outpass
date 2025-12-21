import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../services/firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import {
    FileText,
    CheckCircle,
    Clock,
    XCircle,
    Plus,
    ArrowRight,
    Download,
    Activity,
    Calendar,
    ChevronRight,
    Bell
} from 'lucide-react';

export default function Dashboard() {
    const { userData, currentUser } = useAuth();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        total: 0,
        approved: 0,
        pending: 0,
        rejected: 0
    });

    useEffect(() => {
        if (!currentUser) return;

        const q = query(
            collection(db, 'outpasses'),
            where('studentId', '==', currentUser.uid),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedRequests = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setRequests(fetchedRequests);

            // Calculate Stats
            const newStats = fetchedRequests.reduce((acc, req) => {
                acc.total++;
                if (req.status === 'approved') acc.approved++;
                else if (req.status === 'rejected') acc.rejected++;
                else acc.pending++;
                return acc;
            }, { total: 0, approved: 0, pending: 0, rejected: 0 });

            setStats(newStats);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching outpasses:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [currentUser]);

    // Helper to determine stage index for stepper
    const getStageIndex = (status) => {
        if (!status) return 0;
        if (status === 'approved') return 4;
        if (status === 'rejected') return -1; // Special case for rejected

        const stages = {
            'pending-teacher': 1,
            'pending-hod': 2,
            'pending-warden': 3,
            'approved': 4
        };
        return stages[status] || 0;
    };

    const currentRequest = requests.length > 0 ? requests[0] : null;
    const currentStage = currentRequest ? getStageIndex(currentRequest.status) : 0;
    const recentActivity = requests.slice(0, 5);

    // Format Date Helper
    const formatDate = (timestamp) => {
        if (!timestamp) return 'Date Pending';
        // Handle Firestore Timestamp
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const StatusBadge = ({ status }) => {
        let style = 'bg-gray-100 text-gray-700 border-gray-200';
        if (status === 'approved') style = 'bg-green-100 text-green-700 border-green-200';
        else if (status === 'rejected') style = 'bg-red-100 text-red-700 border-red-200';
        else if (status && status.includes('pending')) style = 'bg-yellow-100 text-yellow-700 border-yellow-200';

        // Format label: "pending-teacher" -> "Pending (Teacher)"
        const label = status
            ? status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')
            : 'Unknown';

        return (
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${style}`}>
                {label}
            </span>
        );
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Top Welcome Section */}
            <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-6 shadow-sm border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="flex items-center space-x-3 mb-2">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Welcome back, {userData?.name || 'Student'}
                            </h1>
                            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full shadow-sm capitalize">
                                {userData?.role || 'Student'}
                            </span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Manage your academic outpasses efficiently. You have <span className="font-semibold text-gray-900">{stats.pending} pending requests</span>.
                        </p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-500 hover:text-blue-600 transition-colors">
                            <Bell className="w-5 h-5" />
                        </button>
                        <div className="text-right hidden sm:block">
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Current Date</p>
                            <p className="text-sm font-semibold text-gray-700">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                            <FileText className="w-6 h-6" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{stats.total}</h3>
                        <p className="text-sm text-gray-500 font-medium">Total Requests</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-green-100 text-green-600 group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{stats.approved}</h3>
                        <p className="text-sm text-gray-500 font-medium">Approved</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-yellow-100 text-yellow-600 group-hover:scale-110 transition-transform">
                            <Clock className="w-6 h-6" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{stats.pending}</h3>
                        <p className="text-sm text-gray-500 font-medium">Pending</p>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-xl bg-red-100 text-red-600 group-hover:scale-110 transition-transform">
                            <XCircle className="w-6 h-6" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{stats.rejected}</h3>
                        <p className="text-sm text-gray-500 font-medium">Rejected</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Current Request Status & Quick Actions */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Current Request Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-800 flex items-center">
                                <Activity className="w-5 h-5 mr-2 text-blue-600" />
                                Latest Request Status
                            </h2>
                            <Link to="/student/history" className="text-sm text-blue-600 font-medium hover:text-blue-700 flex items-center">
                                View Details <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {currentRequest ? (
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 text-base">{currentRequest.reason}</h4>
                                        <p className="text-xs text-gray-500 mt-1">Status: <span className="capitalize">{currentRequest.status?.replace('-', ' ')}</span> • {formatDate(currentRequest.createdAt)}</p>
                                    </div>
                                    <StatusBadge status={currentRequest.status} />
                                </div>

                                {/* Stepper */}
                                {currentStage !== -1 ? (
                                    <div className="relative flex items-center justify-between mt-8 mb-2">
                                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full -z-0"></div>
                                        <div
                                            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 rounded-full -z-0 transition-all duration-1000"
                                            style={{ width: `${(Math.max(0, currentStage) / 4) * 100}%` }}
                                        ></div>

                                        {['Submitted', 'Class Incharge', 'HOD', 'Warden', 'Approved'].map((step, idx) => (
                                            <div key={idx} className="relative z-10 flex flex-col items-center">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${idx < currentStage
                                                        ? 'bg-blue-600 border-blue-600 text-white'
                                                        : idx === currentStage
                                                            ? 'bg-white border-blue-600 text-blue-600 animate-pulse'
                                                            : 'bg-white border-gray-300 text-gray-300'
                                                    }`}>
                                                    {idx < currentStage ? <CheckCircle className="w-5 h-5" /> : <div className="w-2 h-2 rounded-full bg-current" />}
                                                </div>
                                                <p className={`text-[9px] sm:text-[10px] mt-2 font-semibold uppercase tracking-wide text-center absolute top-8 w-20 ${idx <= currentStage ? 'text-gray-800' : 'text-gray-400'}`}>{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-200 flex items-center">
                                        <XCircle className="w-5 h-5 mr-2" />
                                        This request has been rejected. Please contact your class advisor for more details.
                                    </div>
                                )}
                                <div className="h-6"></div> {/* Spacer for absolute text */}
                            </div>
                        ) : (
                            <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                                <p className="text-gray-500 mb-4">You haven't made any outpass requests yet.</p>
                                <Link to="/student/request" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                    Create First Request
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Link to="/student/request" className="group p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1">
                            <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                                <Plus className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-white font-semibold text-base mb-1">New Request</h3>
                            <p className="text-blue-100 text-xs">Apply for outpass</p>
                        </Link>

                        <Link to="/student/history" className="group p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all transform hover:-translate-y-1">
                            <div className="bg-indigo-100 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-indigo-200 transition-colors">
                                <FileText className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-gray-900 font-semibold text-base mb-1">My History</h3>
                            <p className="text-gray-500 text-xs">View past requests</p>
                        </Link>

                        <button className="group p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all transform hover:-translate-y-1 text-left">
                            <div className="bg-green-100 w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
                                <Download className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-gray-900 font-semibold text-base mb-1">Download</h3>
                            <p className="text-gray-500 text-xs">Latest approval PDF</p>
                        </button>
                    </div>
                </div>

                {/* Recent Activity Column */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full">
                    <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-blue-600" />
                        Recent Activity
                    </h2>

                    <div className="space-y-4 flex-1">
                        {recentActivity.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-gray-100 rounded-lg text-gray-500">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{item.reason}</p>
                                        <p className="text-xs text-gray-500">{formatDate(item.createdAt)}</p>
                                    </div>
                                </div>
                                <StatusBadge status={item.status} />
                            </div>
                        ))}

                        {recentActivity.length === 0 && (
                            <div className="text-center py-8 text-gray-400">
                                <p className="text-sm">No recent activity</p>
                            </div>
                        )}
                    </div>

                    <Link to="/student/history" className="mt-6 text-center w-full py-2 text-sm text-gray-600 hover:text-blue-600 font-medium border-t border-gray-100 pt-4 flex items-center justify-center group transition-colors">
                        View All History <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
