import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, where, orderBy, limit, getDocs, Timestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { QrCode, ShieldCheck, LogOut, LogIn, Clock, Users } from 'lucide-react';

export default function SecurityDashboard() {
    const [stats, setStats] = useState({
        todayExit: 0,
        todayEntry: 0,
        currentlyOut: 0
    });
    const [recentLogs, setRecentLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const todayTimestamp = Timestamp.fromDate(today);

                // 1. Fetch Today's Logs
                const logsRef = collection(db, 'gate_logs');
                const qLogs = query(
                    logsRef,
                    where('timestamp', '>=', todayTimestamp),
                    orderBy('timestamp', 'desc')
                );

                const logsSnap = await getDocs(qLogs);
                const logsData = logsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Calculate Stats
                const exits = logsData.filter(l => l.type === 'exit').length;
                const entries = logsData.filter(l => l.type === 'entry').length;

                // 2. Fetch Currently Out (Active Status)
                const outpassesRef = collection(db, 'outpasses');
                const qActive = query(outpassesRef, where('status', '==', 'active')); // 'active' means checked out but not returned
                const activeSnap = await getDocs(qActive);

                setStats({
                    todayExit: exits,
                    todayEntry: entries,
                    currentlyOut: activeSnap.size
                });

                setRecentLogs(logsData.slice(0, 5)); // Take top 5 recent
            } catch (error) {
                console.error("Error fetching security stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) return <div className="p-10 text-center text-slate-400">Loading dashboard...</div>;

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Security Command Center</h1>
                    <p className="text-slate-500">Campus Entry/Exit Overview</p>
                </div>
                <div className="text-sm text-slate-400 font-medium bg-white px-3 py-1 rounded-full border border-slate-100">
                    {new Date().toLocaleDateString()}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/scan" className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-200 transition-transform hover:-translate-y-1">
                    <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-4 -translate-y-4">
                        <QrCode size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl w-fit mb-4">
                            <QrCode size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Open Gate Scanner</h3>
                        <p className="text-blue-100 text-sm">Scan student QR codes for Check-In or Check-Out.</p>
                    </div>
                </Link>

                <Link to="/logs" className="group relative overflow-hidden bg-white border border-slate-100 rounded-2xl p-6 text-slate-800 shadow-sm transition-transform hover:-translate-y-1 hover:border-slate-200">
                    <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4">
                        <ShieldCheck size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="p-3 bg-slate-100 rounded-xl w-fit mb-4 text-slate-600">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-1">View Gate Logs</h3>
                        <p className="text-slate-500 text-sm">Review full history of entry and exit events.</p>
                    </div>
                </Link>
            </div>

            {/* Stats Overview */}
            <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">Today's Activity</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><LogOut size={18} /></div>
                            <span className="text-xs font-bold uppercase text-slate-400">Total Exits</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-800">{stats.todayExit}</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><LogIn size={18} /></div>
                            <span className="text-xs font-bold uppercase text-slate-400">Total Entries</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-800">{stats.todayEntry}</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users size={18} /></div>
                            <span className="text-xs font-bold uppercase text-slate-400">Currently Out</span>
                        </div>
                        <p className="text-2xl font-bold text-slate-800">{stats.currentlyOut}</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Clock size={18} /></div>
                            <span className="text-xs font-bold uppercase text-slate-400">Peak Hour</span>
                        </div>
                        <p className="text-lg font-bold text-slate-800">--</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity List */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-800">Recent Movements</h3>
                    <Link to="/logs" className="text-sm text-blue-600 hover:underline font-medium">View All</Link>
                </div>
                <div className="divide-y divide-slate-100">
                    {recentLogs.length === 0 ? (
                        <div className="p-8 text-center text-slate-400">No activity recorded today.</div>
                    ) : (
                        recentLogs.map(log => (
                            <div key={log.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${log.type === 'exit' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'
                                        }`}>
                                        {log.type === 'exit' ? <LogOut size={18} /> : <LogIn size={18} />}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800">{log.studentName}</p>
                                        <p className="text-xs text-slate-500">{log.registerNo}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-slate-700">
                                        {log.timestamp?.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                    <p className="text-xs text-slate-400 capitalize">{log.type}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
