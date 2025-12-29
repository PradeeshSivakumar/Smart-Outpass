import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useDepartmentRequests, useDepartmentHistory, updateOutpassStatus } from '../../hooks/useOutpass';
import { CheckCircle, XCircle, Clock, Filter, ChevronRight, History, LayoutDashboard } from 'lucide-react';
import RequestDetail from '../../components/common/RequestDetail';

export default function TeacherDashboard() {
    const { userData } = useAuth();
    const [activeTab, setActiveTab] = useState('pending'); // 'pending' | 'history'

    // Data Hooks
    const pendingData = useDepartmentRequests(userData?.department);
    const historyData = useDepartmentHistory(userData?.department, 'teacher');

    const [selectedRequest, setSelectedRequest] = useState(null);

    const handleAction = async (id, action) => {
        try {
            await updateOutpassStatus(id, 'teacher', action);
            setSelectedRequest(null);
        } catch (error) {
            console.error("Failed to update status:", error);
        }
    };

    // Calculate Stats
    const stats = {
        pending: pendingData.requests.length,
        approvedToday: historyData.history.filter(r =>
            r.teacherStatus === 'approved' &&
            new Date(r.createdAt).toDateString() === new Date().toDateString()
        ).length,
        totalProcessed: historyData.history.length
    };

    const currentList = activeTab === 'pending' ? pendingData.requests : historyData.history;
    const isLoading = activeTab === 'pending' ? pendingData.loading : historyData.loading;

    return (
        <div className="space-y-8">
            {/* Header section with Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                    <h1 className="text-2xl font-bold text-slate-800">Teacher Dashboard</h1>
                    <p className="text-slate-500">Overview for <strong>{userData?.department}</strong> Department</p>
                </div>

                {/* Simple Stats Row */}
                <div className="md:col-span-3 grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Pending</p>
                            <p className="text-2xl font-bold text-amber-500">{stats.pending}</p>
                        </div>
                        <div className="p-3 bg-amber-50 rounded-xl text-amber-500"><Clock size={20} /></div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Approved Today</p>
                            <p className="text-2xl font-bold text-green-600">{stats.approvedToday}</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-xl text-green-600"><CheckCircle size={20} /></div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total History</p>
                            <p className="text-2xl font-bold text-blue-600">{stats.totalProcessed}</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><History size={20} /></div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden min-h-[500px]">

                {/* Tabs */}
                <div className="flex border-b border-slate-100">
                    <button
                        onClick={() => setActiveTab('pending')}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors border-b-2 ${activeTab === 'pending'
                            ? 'border-primary text-primary bg-blue-50/50'
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                            }`}
                    >
                        <LayoutDashboard size={18} />
                        Pending Requests
                        {stats.pending > 0 && (
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full ml-1">
                                {stats.pending}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors border-b-2 ${activeTab === 'history'
                            ? 'border-primary text-primary bg-blue-50/50'
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                            }`}
                    >
                        <History size={18} />
                        History Log
                    </button>
                </div>

                {/* List View */}
                {isLoading ? (
                    <div className="p-10 text-center text-slate-400">Loading...</div>
                ) : currentList.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-block p-4 rounded-full bg-slate-50 mb-4 text-slate-300">
                            {activeTab === 'pending' ? <CheckCircle size={40} /> : <History size={40} />}
                        </div>
                        <p className="text-slate-500 font-medium">
                            {activeTab === 'pending' ? 'All caught up! No pending requests.' : 'No history found.'}
                        </p>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-100">
                        {currentList.map((req) => (
                            <div
                                key={req.id}
                                onClick={() => setSelectedRequest(req)}
                                className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold uppercase group-hover:bg-white group-hover:shadow-sm transition-all">
                                        {req.studentName?.charAt(0) || req.name?.charAt(0) || 'S'}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-800 group-hover:text-primary transition-colors">{req.studentName || req.name}</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-sm text-slate-500">{req.type}</span>
                                            {activeTab === 'history' && (
                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${req.teacherStatus === 'approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                                    }`}>
                                                    {req.teacherStatus.toUpperCase()}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-slate-400 mt-1">
                                            {req.createdAt?.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300 group-hover:text-primary transition-colors">
                                    <span className="text-xs font-medium uppercase tracking-wider">View Details</span>
                                    <ChevronRight size={18} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Detailed Approval Modal */}
            {selectedRequest && (
                <RequestDetail
                    request={selectedRequest}
                    onClose={() => setSelectedRequest(null)}
                    onAction={activeTab === 'pending' ? handleAction : undefined} // Only allow actions in pending tab
                />
            )}
        </div>
    );
}
