import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { ArrowLeft, Calendar, Clock, FileText } from 'lucide-react';

export default function ApplyPass() {
    const { currentUser, userData } = useAuth();
    const navigate = useNavigate();

    const [type, setType] = useState('Day Out');
    const [reason, setReason] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!type || !reason || !fromTime || !toTime) return;

        setSubmitting(true);
        try {
            await addDoc(collection(db, 'outpasses'), {
                studentUid: currentUser.uid,
                studentName: userData.name || currentUser.displayName,
                department: userData.department,
                registerNo: userData.registerNo,
                type,
                reason,
                fromTime: new Date(fromTime).toISOString(),
                toTime: new Date(toTime).toISOString(),
                teacherStatus: 'pending',
                hodStatus: 'pending',
                wardenStatus: 'pending',
                finalStatus: 'pending',
                createdAt: serverTimestamp()
            });
            navigate('/dashboard');
        } catch (err) {
            console.error("Error submitting pass:", err);
            alert("Failed to submit request. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <DashboardLayout>
            <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <Link to="/dashboard" className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-2xl font-bold text-slate-800">Apply for Outpass</h1>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Pass Type */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Pass Type</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {['Day Out', 'Home Leave', 'Medical'].map((t) => (
                                    <div
                                        key={t}
                                        onClick={() => setType(t)}
                                        className={`cursor-pointer px-4 py-3 rounded-xl border flex items-center justify-center font-medium transition-all ${type === t
                                                ? 'bg-blue-50 border-blue-600 text-blue-700'
                                                : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                                            }`}
                                    >
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Date & Time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">From</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                        <Clock size={16} />
                                    </div>
                                    <input
                                        type="datetime-local"
                                        required
                                        value={fromTime}
                                        onChange={(e) => setFromTime(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">To</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                        <Clock size={16} />
                                    </div>
                                    <input
                                        type="datetime-local"
                                        required
                                        value={toTime}
                                        onChange={(e) => setToTime(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Reason */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Reason</label>
                            <div className="relative">
                                <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
                                    <FileText size={16} />
                                </div>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Why do you need to leave?"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-4 flex items-center justify-end gap-4">
                            <Link to="/dashboard" className="px-6 py-2.5 text-slate-600 font-medium hover:bg-slate-50 rounded-xl transition-colors">
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={submitting}
                                className="px-6 py-2.5 bg-primary text-white font-medium rounded-xl shadow-md hover:bg-blue-700 disabled:opacity-70 transition-all"
                            >
                                {submitting ? 'Submitting...' : 'Submit Request'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}
