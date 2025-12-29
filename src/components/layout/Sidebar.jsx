import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    Home,
    PlusCircle,
    QrCode,
    FileText,
    BarChart2,
    ShieldCheck,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
    const { userData, logout } = useAuth();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const role = userData?.role;

    const links = [
        { label: 'Dashboard', path: '/dashboard', icon: Home, roles: ['student', 'teacher', 'hod', 'warden', 'security', 'admin'] },
        { label: 'Apply Pass', path: '/apply', icon: PlusCircle, roles: ['student'] },
        { label: 'My QR Code', path: '/qr', icon: QrCode, roles: ['student'] },
        { label: 'Approvals', path: '/approvals', icon: FileText, roles: ['teacher', 'hod', 'warden'] },
        { label: 'Department Analytics', path: '/analytics', icon: BarChart2, roles: ['hod', 'admin'] },
        { label: 'Gate Scan', path: '/scan', icon: QrCode, roles: ['security'] },
        { label: 'Gate Logs', path: '/logs', icon: ShieldCheck, roles: ['security', 'admin'] } // Updated logic: logs typically for security/admin
        // Add more as needed
    ];

    const filteredLinks = links.filter(link => link.roles.includes(role));

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Mobile Toggle */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md text-slate-600"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">

                    {/* Branding */}
                    <div className="h-16 flex items-center px-6 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                            S
                        </div>
                        <span className="font-bold text-lg text-slate-800 tracking-tight">SmartOutpass</span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                        {filteredLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive(link.path)
                                            ? 'bg-blue-50 text-blue-600 shadow-sm'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 ml-1'
                                        }`}
                                >
                                    <Icon size={20} className={`mr-3 ${isActive(link.path) ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-500'}`} />
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Profile Footer */}
                    <div className="p-4 border-t border-slate-100">
                        <div className="flex items-center mb-4 px-2">
                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                                {userData?.name?.charAt(0) || 'U'}
                            </div>
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-slate-900 truncate">{userData?.name}</p>
                                <p className="text-xs text-slate-500 uppercase truncate">{userData?.role}</p>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="w-full flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors"
                        >
                            <LogOut size={16} className="mr-2" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
        </>
    );
}
