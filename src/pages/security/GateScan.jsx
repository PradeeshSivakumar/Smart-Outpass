import { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { doc, getDoc, updateDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../context/AuthContext';
import { Scan, Search, CheckCircle, XCircle, LogOut, LogIn } from 'lucide-react';

export default function GateScan() {
    const { userData } = useAuth();
    const [scanResult, setScanResult] = useState(null);
    const [manualId, setManualId] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null); // { type: 'success'|'error', text: '' }
    const scannerRef = useRef(null);

    // Initialize Scanner
    useEffect(() => {
        // Only init if not already handling a result to avoid overlapping
        if (!scanResult) {
            const scanner = new Html5QrcodeScanner(
                "reader",
                { fps: 10, qrbox: { width: 250, height: 250 } },
                /* verbose= */ false
            );

            scanner.render(onScanSuccess, onScanFailure);
            scannerRef.current = scanner;

            return () => {
                scanner.clear().catch(error => console.error("Failed to clear scanner", error));
            };
        }
    }, [scanResult]);

    const onScanSuccess = (decodedText, decodedResult) => {
        try {
            const data = JSON.parse(decodedText);
            if (data.id) {
                handleFetchRequest(data.id);
                // Stop scanning temporarily
                scannerRef.current?.clear();
            }
        } catch (e) {
            console.error("Invalid QR Format", e);
            setMessage({ type: 'error', text: 'Invalid QR Code format.' });
        }
    };

    const onScanFailure = (error) => {
        // console.warn(`Code scan error = ${error}`);
    };

    const handleFetchRequest = async (id) => {
        setLoading(true);
        setMessage(null);
        try {
            const docRef = doc(db, 'outpasses', id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setScanResult({ id: docSnap.id, ...docSnap.data() });
            } else {
                setMessage({ type: 'error', text: 'Request not found.' });
            }
        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: 'Error fetching data.' });
        } finally {
            setLoading(false);
        }
    };

    const handleGateAction = async (type) => {
        if (!scanResult) return;

        setLoading(true);
        try {
            // 1. Update Outpass Document
            const outpassRef = doc(db, 'outpasses', scanResult.id);
            const updates = {};

            if (type === 'exit') {
                updates.exitTime = serverTimestamp();
                updates.status = 'active'; // Student is currently OUT
            } else {
                updates.returnTime = serverTimestamp();
                updates.status = 'completed'; // Student has RETURNED
            }

            await updateDoc(outpassRef, updates);

            // 2. Add to Gate Logs
            await addDoc(collection(db, 'gate_logs'), {
                requestId: scanResult.id,
                studentName: scanResult.studentName || scanResult.name,
                registerNo: scanResult.registerNo || 'N/A',
                type: type, // 'exit' or 'entry'
                timestamp: serverTimestamp(),
                guardId: userData?.uid || 'unknown',
                guardName: userData?.name || 'Security'
            });

            setMessage({ type: 'success', text: `Student ${type === 'exit' ? 'Checked OUT' : 'Checked IN'} Successfully.` });
            setScanResult(null); // Reset for next scan
            // Re-init scanner? User can refresh or we can auto-reload component logic? 
            // Better to let user click "Scan New" to keep UI stable.

        } catch (error) {
            console.error(error);
            setMessage({ type: 'error', text: 'Failed to process gate action.' });
        } finally {
            setLoading(false);
        }
    };

    const resetScanner = () => {
        setScanResult(null);
        setMessage(null);
        setManualId('');
        // This triggers the useEffect to re-mount the scanner
    };

    // Helper to format date safely
    const formatDate = (dateVal) => {
        if (!dateVal) return 'N/A';
        // Handle Firestore Timestamp
        if (dateVal.seconds) return new Date(dateVal.seconds * 1000).toLocaleString();
        // Handle ISO String or Date object
        return new Date(dateVal).toLocaleString();
    };

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-slate-800">Gate Scanner</h1>
                {scanResult && (
                    <button onClick={resetScanner} className="text-blue-600 font-medium hover:underline">
                        Scan New
                    </button>
                )}
            </div>

            {/* Error/Success Messages */}
            {message && (
                <div className={`p-4 rounded-xl flex items-center gap-3 ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {message.type === 'success' ? <CheckCircle /> : <XCircle />}
                    {message.text}
                </div>
            )}

            {/* Scanner Area */}
            {!scanResult && (
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div id="reader" className="w-full rounded-xl overflow-hidden"></div>
                    <div className="mt-6 flex gap-2">
                        <input
                            type="text"
                            placeholder="Or Enter Request ID manually..."
                            className="flex-1 px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={manualId}
                            onChange={(e) => setManualId(e.target.value)}
                        />
                        <button
                            onClick={() => handleFetchRequest(manualId)}
                            disabled={!manualId || loading}
                            className="px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 disabled:opacity-50"
                        >
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            )}

            {/* Result Area */}
            {scanResult && (
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden animate-in zoom-in duration-200">
                    <div className={`h-2 w-full ${scanResult.finalStatus === 'approved' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">{scanResult.studentName || scanResult.name}</h2>
                                <p className="text-slate-500">{scanResult.registerNo}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-bold uppercase ${scanResult.finalStatus === 'approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}>
                                {scanResult.finalStatus}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-3 bg-slate-50 rounded-xl">
                                <p className="text-xs text-slate-400 uppercase font-bold">From</p>
                                <p className="font-medium text-slate-700">
                                    {formatDate(scanResult.fromTime)}
                                </p>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-xl">
                                <p className="text-xs text-slate-400 uppercase font-bold">To</p>
                                <p className="font-medium text-slate-700">
                                    {formatDate(scanResult.toTime)}
                                </p>
                            </div>
                        </div>

                        {scanResult.finalStatus === 'approved' && (
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleGateAction('exit')}
                                    disabled={loading || scanResult.exitTime}
                                    className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:bg-slate-200"
                                >
                                    <LogOut size={20} />
                                    Mark Exit
                                </button>
                                <button
                                    onClick={() => handleGateAction('entry')}
                                    disabled={loading || !scanResult.exitTime || scanResult.returnTime}
                                    className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:bg-slate-200"
                                >
                                    <LogIn size={20} />
                                    Mark Entry
                                </button>
                            </div>
                        )}

                        {/* Status Check Logic */}
                        {scanResult.exitTime && (
                            <p className="mt-4 text-center text-sm text-slate-500">
                                Checked Out at: {new Date(scanResult.exitTime.seconds ? scanResult.exitTime.seconds * 1000 : scanResult.exitTime).toLocaleTimeString()}
                            </p>
                        )}
                        {scanResult.returnTime && (
                            <p className="text-center text-sm text-slate-500">
                                Returned at: {new Date(scanResult.returnTime.seconds ? scanResult.returnTime.seconds * 1000 : scanResult.returnTime).toLocaleTimeString()}
                            </p>
                        )}

                    </div>
                </div>
            )}
        </div>
    );
}
