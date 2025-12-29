import { Plus, Clock, CheckCircle, XCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useStudentOutpasses } from '../../hooks/useOutpass';

export default function StudentDashboard() {
    const { currentUser } = useAuth();
    const { outpasses, loading } = useStudentOutpasses(currentUser?.uid);

    const pendingCount = outpasses.filter(o => o.finalStatus === 'pending').length;
    const activePass = outpasses.find(o => o.finalStatus === 'approved' && new Date(o.toTime) > new Date()) ? 'Active' : 'None';
    const totalOutings = outpasses.filter(o => o.finalStatus === 'approved').length;

    const stats = [
        { label: 'Active Pass', value: activePass, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
        { label: 'Pending Requests', value: pendingCount, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
        { label: 'Total Outings', value: totalOutings, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    ];

    if (loading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Student Dashboard</h1>
                    <p className="text-slate-500">Welcome back, check your pass status.</p>
                </div>
                <Link to="/apply" className="px-4 py-2 bg-primary text-white rounded-xl font-medium shadow-sm hover:bg-blue-700 flex items-center gap-2">
                    <Plus size={20} />
                    New Request
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                <Icon size={24} />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Requests</h3>
                {outpasses.length === 0 ? (
                    <div className="text-center py-10 text-slate-400">
                        No recent activity found.
                    </div>
                ) : (
                    <div className="space-y-4">
                        {outpasses.slice(0, 5).map(req => (
                            <div key={req.id} className="flex items-center justify-between p-4 border border-slate-50 rounded-xl hover:bg-slate-50 transition">
                                <div>
                                    <h4 className="font-semibold text-slate-800">{req.type}</h4>
                                    <p className="text-sm text-slate-500">{new Date(req.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div className="text-right">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium 
                                        ${req.finalStatus === 'approved' ? 'bg-green-100 text-green-700' :
                                            req.finalStatus === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'}`}>
                                        {req.finalStatus.toUpperCase()}
                                    </span>
                                    {req.finalStatus === 'pending' && (
                                        <p className="text-xs text-slate-400 mt-1">
                                            {req.teacherStatus === 'pending' ? 'Waiting: Teacher' :
                                                req.hodStatus === 'pending' ? 'Waiting: HOD' : 'Waiting: Warden'}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
