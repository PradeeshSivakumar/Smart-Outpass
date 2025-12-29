import { useAuth } from '../../context/AuthContext';
import { useHODRequests, useDepartmentHistory } from '../../hooks/useOutpass';
import DashboardLayout from '../../components/layout/DashboardLayout';
import HODAnalytics from './HODAnalytics';

export default function HODAnalyticsPage() {
    const { userData } = useAuth();

    // Data Hooks
    const { requests: pendingRequests, loading: pendingLoading } = useHODRequests(userData?.department);
    const { history: historyRequests, loading: historyLoading } = useDepartmentHistory(userData?.department, 'hod');

    const isLoading = pendingLoading || historyLoading;

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Department Analytics</h1>
                    <p className="text-slate-500">Overview and statistics for <strong>{userData?.department}</strong></p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden min-h-[500px]">
                    {isLoading ? (
                        <div className="p-10 text-center text-slate-400">Loading analytics...</div>
                    ) : (
                        <HODAnalytics requests={[...pendingRequests, ...historyRequests]} />
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
