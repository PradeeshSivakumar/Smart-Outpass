import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { useAuth } from '../../context/AuthContext';
import { useStudentOutpasses } from '../../hooks/useOutpass';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

export default function QRCodePage() {
    const { currentUser } = useAuth();
    const { outpasses, loading } = useStudentOutpasses(currentUser?.uid);
    const [activePass, setActivePass] = useState(null);

    useEffect(() => {
        if (!loading && outpasses.length > 0) {
            // Find the most recent APPROVED pass that hasn't been completed (returned)
            // Logic: finalStatus === 'approved' AND (no 'entryTime' or 'entryTime' is null)
            // For this v1, we focus on just finding the latest approved one.
            const pass = outpasses.find(p => p.finalStatus === 'approved');
            setActivePass(pass);
        }
    }, [outpasses, loading]);

    if (loading) return <div className="p-8 text-center text-slate-500">Loading your pass...</div>;

    if (!activePass) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
                <div className="bg-slate-100 p-6 rounded-full mb-6">
                    <AlertCircle size={48} className="text-slate-400" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">No Active Digital Pass</h2>
                <p className="text-slate-500 max-w-md">
                    You don't have any approved outpasses at the moment. Apply for a new pass to generate a QR code.
                </p>
            </div>
        );
    }

    const qrData = JSON.stringify({
        id: activePass.id,
        uid: activePass.studentUid,
        type: activePass.type
    });

    return (
        <div className="max-w-md mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-slate-800 text-center">Digital Outpass</h1>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 relative">
                {/* Header Strip */}
                <div className="h-4 bg-green-500 w-full animate-pulse"></div>

                <div className="p-8 flex flex-col items-center">

                    {/* QR Code */}
                    <div className="bg-white p-4 rounded-xl border-2 border-slate-100 shadow-sm mb-6">
                        <QRCode
                            value={qrData}
                            size={200}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            viewBox={`0 0 256 256`}
                        />
                    </div>

                    <div className="w-full text-center space-y-1 mb-6">
                        <h2 className="text-2xl font-bold text-slate-900">{activePass.name}</h2>
                        <p className="text-slate-500 font-medium uppercase tracking-wider text-sm">{activePass.registerNo} • {activePass.department}</p>
                    </div>

                    {/* Details Ticket */}
                    <div className="w-full bg-slate-50 rounded-xl p-4 space-y-4 border border-slate-100">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-600">
                                <Calendar size={18} />
                                <span className="text-sm font-medium">Date</span>
                            </div>
                            <span className="font-bold text-slate-800">
                                {activePass.fromTime ? new Date(activePass.fromTime).toLocaleDateString() : 'N/A'}
                            </span>
                        </div>
                        <div className="border-t border-slate-200 border-dashed"></div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-600">
                                <Clock size={18} />
                                <span className="text-sm font-medium">Valid Until</span>
                            </div>
                            <span className="font-bold text-slate-800">
                                {activePass.toTime ? new Date(activePass.toTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A'}
                            </span>
                        </div>
                        <div className="border-t border-slate-200 border-dashed"></div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-slate-600">
                                <AlertCircle size={18} />
                                <span className="text-sm font-medium">Type</span>
                            </div>
                            <span className="font-bold text-primary uppercase">{activePass.type}</span>
                        </div>
                    </div>

                    <p className="text-xs text-slate-400 mt-6 text-center">
                        Show this QR code to the security at the main gate for scanning.
                        <br />Ref: {activePass.id.slice(0, 8)}
                    </p>
                </div>
            </div>
        </div>
    );
}
