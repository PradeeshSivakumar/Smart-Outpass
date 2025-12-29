import { useWardenRequests, useWardenHistory } from '../../hooks/useOutpass';
import DashboardLayout from '../../components/layout/DashboardLayout';
import WardenAnalytics from './WardenAnalytics';

export default function WardenAnalyticsPage() {
    // Data Hooks
    const { requests: pendingRequests, loading: pendingLoading } = useWardenRequests();
    const { history: historyRequests, loading: historyLoading } = useWardenHistory();

    const isLoading = pendingLoading || historyLoading;

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Warden Analytics</h1>
                    <p className="text-slate-500">Hostel Administration & Statistics</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden min-h-[500px]">
                    {isLoading ? (
                        <div className="p-10 text-center text-slate-400">Loading analytics...</div>
                    ) : (
                        <WardenAnalytics requests={[...pendingRequests, ...historyRequests]} />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
