import { X, CheckCircle, XCircle, Clock, Calendar, User, FileText, MapPin } from 'lucide-react';

export default function RequestDetail({ request, onClose, onAction, actionLabel }) {
    if (!request) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="text-lg font-bold text-slate-800">Request Details</h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">

                    {/* Student Info */}
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold uppercase">
                            {request.studentName?.charAt(0) || request.name?.charAt(0) || 'S'}
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-800">{request.studentName || request.name}</h4>
                            <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                                <span className="bg-slate-100 px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide">{request.department || 'N/A'}</span>
                                <span>•</span>
                                <span>{request.registerNo || 'No Reg No'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Request Details Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1 uppercase tracking-wider">
                                <Calendar size={12} /> Type
                            </div>
                            <p className="font-semibold text-slate-700">{request.type}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1 uppercase tracking-wider">
                                <Clock size={12} /> Duration
                            </div>
                            <p className="font-semibold text-slate-700">
                                {request.fromTime && request.toTime ? (
                                    <>
                                        {Math.ceil((new Date(request.toTime) - new Date(request.fromTime)) / (1000 * 60 * 60))} Hours
                                    </>
                                ) : 'N/A'}
                            </p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                            <Clock size={16} className="text-primary" />
                            Time Schedule
                        </h5>
                        <div className="pl-2 border-l-2 border-slate-100 space-y-4 ml-2">
                            <div className="relative pl-6">
                                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-green-500 ring-4 ring-white"></div>
                                <p className="text-xs text-slate-400 uppercase font-medium">Out Time</p>
                                <p className="text-slate-700 font-medium">{new Date(request.fromTime).toLocaleString()}</p>
                            </div>
                            <div className="relative pl-6">
                                <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-red-500 ring-4 ring-white"></div>
                                <p className="text-xs text-slate-400 uppercase font-medium">In Time</p>
                                <p className="text-slate-700 font-medium">{new Date(request.toTime).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    {/* Reason */}
                    <div>
                        <h5 className="text-sm font-semibold text-slate-900 flex items-center gap-2 mb-2">
                            <FileText size={16} className="text-primary" />
                            Reason
                        </h5>
                        <div className="p-4 bg-slate-50 rounded-xl text-slate-600 text-sm leading-relaxed border border-slate-100">
                            {request.reason}
                        </div>
                    </div>

                </div>

                {/* Footer Actions */}
                {onAction && (
                    <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-3">
                        <button
                            onClick={() => onAction(request.id, 'rejected')}
                            className="flex-1 py-3 px-4 bg-white border border-slate-200 text-red-600 font-bold rounded-xl hover:bg-red-50 hover:border-red-200 transition-all shadow-sm flex items-center justify-center gap-2"
                        >
                            <XCircle size={20} />
                            Reject Request
                        </button>
                        <button
                            onClick={() => onAction(request.id, 'approved')}
                            className="flex-1 py-3 px-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-200 flex items-center justify-center gap-2"
                        >
                            <CheckCircle size={20} />
                            {actionLabel || 'Approve Request'}
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
