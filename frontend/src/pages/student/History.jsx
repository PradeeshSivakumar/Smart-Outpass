import { useEffect, useState } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useAuth } from '../../context/AuthContext';
import { Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

export default function History() {
    const { currentUser } = useAuth();
    const [outpasses, setOutpasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!currentUser) return;

        const q = query(
            collection(db, 'outpasses'),
            where('studentId', '==', currentUser.uid),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const docs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setOutpasses(docs);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching history:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [currentUser]);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'approved':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><CheckCircle size={12} className="mr-1" /> Approved</span>;
            case 'rejected':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><XCircle size={12} className="mr-1" /> Rejected</span>;
            case 'pending-teacher':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><Clock size={12} className="mr-1" /> Pending Teacher</span>;
            case 'pending-hod':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"><Clock size={12} className="mr-1" /> Pending HOD</span>;
            case 'pending-warden':
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"><Clock size={12} className="mr-1" /> Pending Warden</span>;
            default:
                return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{status}</span>;
        }
    };

    if (loading) return <div className="p-4 text-center">Loading history...</div>;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">My Requests History</h2>

            {outpasses.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-lg shadow">
                    <p className="text-gray-500">No outpass requests found.</p>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                        {outpasses.map((request) => (
                            <li key={request.id} className="p-4 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-blue-600 truncate">
                                            {request.reason}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {new Date(request.fromTime).toLocaleString()} — {new Date(request.toTime).toLocaleString()}
                                        </p>
                                        <div className="mt-1">
                                            {getStatusBadge(request.status || request.finalStatus)}
                                        </div>
                                    </div>
                                    <div>
                                        {request.status === 'approved' && request.qrCode && (
                                            <button className="text-sm text-blue-500 underline">View QR</button>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
