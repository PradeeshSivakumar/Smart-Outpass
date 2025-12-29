import { useMemo } from 'react';
import { PieChart, BarChart2, TrendingUp, Users, CheckCircle, XCircle, Clock, ExternalLink } from 'lucide-react';

export default function WardenAnalytics({ requests }) {
    const analytics = useMemo(() => {
        const total = requests.length;
        if (total === 0) return null;

        // Status Breakdown
        const approved = requests.filter(r => r.wardenStatus === 'approved').length;
        const rejected = requests.filter(r => r.wardenStatus === 'rejected').length;
        const pending = requests.filter(r => r.wardenStatus === 'pending').length;

        // Active Outpasses (Assuming 'active' status or checking if out but not returned - simplistic check here based on passed data if available, otherwise just use approved count as proxy for now or refine logic if we tracked 'returned' state)
        // For now, let's track "Approved (Authorized to go)" vs "Rejected".

        // Reason Analysis
        const reasons = {};
        requests.forEach(r => {
            const reason = r.reason || 'Other';
            reasons[reason] = (reasons[reason] || 0) + 1;
        });

        const sortedReasons = Object.entries(reasons)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5);

        // Daily Trends
        const last7Days = [...Array(7)].map((_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - i);
            return d.toISOString().split('T')[0];
        }).reverse();

        const dailyCounts = last7Days.map(date => {
            const count = requests.filter(r =>
                r.createdAt && r.createdAt.toISOString().split('T')[0] === date
            ).length;
            return { date, count };
        });

        const maxDaily = Math.max(...dailyCounts.map(d => d.count), 1);

        return {
            total,
            approved,
            rejected,
            pending,
            approvalRate: Math.round((approved / total) * 100) || 0,
            sortedReasons,
            dailyCounts,
            maxDaily
        };
    }, [requests]);

    if (!analytics) {
        return (
            <div className="p-10 text-center">
                <div className="inline-block p-4 rounded-full bg-slate-50 mb-4 text-slate-300">
                    <BarChart2 size={40} />
                </div>
                <p className="text-slate-500 font-medium">No sufficient data for analytics yet.</p>
            </div>
        );
    }

    return (
        <div className="p-6 space-y-8 animate-in fade-in duration-500">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-blue-900">
                    <div className="flex items-center gap-2 mb-1 opacity-70">
                        <Users size={16} /> <span className="text-xs font-bold uppercase">Total Requests</span>
                    </div>
                    <p className="text-3xl font-bold">{analytics.total}</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900">
                    <div className="flex items-center gap-2 mb-1 opacity-70">
                        <CheckCircle size={16} /> <span className="text-xs font-bold uppercase">Approved</span>
                    </div>
                    <p className="text-3xl font-bold">{analytics.approved}</p>
                </div>
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-900">
                    <div className="flex items-center gap-2 mb-1 opacity-70">
                        <XCircle size={16} /> <span className="text-xs font-bold uppercase">Rejected</span>
                    </div>
                    <p className="text-3xl font-bold">{analytics.rejected}</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-900">
                    <div className="flex items-center gap-2 mb-1 opacity-70">
                        <Clock size={16} /> <span className="text-xs font-bold uppercase">Pending</span>
                    </div>
                    <p className="text-3xl font-bold">{analytics.pending}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Daily Trends Chart */}
                <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <TrendingUp size={20} className="text-blue-500" /> Requests (Last 7 Days)
                    </h3>
                    <div className="flex items-end justify-between h-48 gap-2">
                        {analytics.dailyCounts.map((day, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                                <div className="relative w-full flex justify-center">
                                    <span className="absolute -top-8 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        {day.count} requests
                                    </span>
                                    <div
                                        className="w-full bg-blue-100 hover:bg-blue-500 transition-colors rounded-t-md"
                                        style={{ height: `${(day.count / analytics.maxDaily) * 100}%`, minHeight: '4px' }}
                                    ></div>
                                </div>
                                <span className="text-[10px] text-slate-400 font-medium">
                                    {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reasons Breakdown */}
                <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <PieChart size={20} className="text-purple-500" /> Common Reasons
                    </h3>
                    <div className="space-y-4">
                        {analytics.sortedReasons.map(([reason, count], i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="flex-1 space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-medium text-slate-700 capitalize">{reason}</span>
                                        <span className="text-slate-500">{count} ({Math.round((count / analytics.total) * 100)}%)</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-purple-500 rounded-full opacity-80"
                                            style={{ width: `${(count / analytics.total) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
