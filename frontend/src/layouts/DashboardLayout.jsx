import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, Menu, X, Home, FileText, User, Shield, CheckSquare, ChevronRight } from 'lucide-react';

export default function DashboardLayout() {
    const { userData, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    // Define navigation items based on role
    const getNavItems = (role) => {
        const common = [{ label: 'Dashboard', path: '/dashboard', icon: Home }];

        switch (role) {
            case 'student':
                return [
                    ...common,
                    { label: 'Request Outpass', path: '/student/request', icon: FileText },
                    { label: 'My History', path: '/student/history', icon: CheckSquare },
                ];
            case 'teacher':
            case 'hod':
            case 'warden':
                return [
                    ...common,
                    { label: 'Pending Approvals', path: '/staff/approvals', icon: CheckSquare },
                    { label: 'Student History', path: '/staff/students', icon: User },
                ];
            case 'security':
                return [
                    ...common,
                    { label: 'Scan QR', path: '/security/scan', icon: Shield },
                    { label: 'Logs', path: '/security/logs', icon: FileText },
                ];
            default:
                // Fallback for new users or undefined roles
                return common;
        }
    };

    const navItems = getNavItems(userData?.role);

    return (
        <div className="flex h-screen bg-slate-50 font-sans">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 shadow-xl lg:shadow-none transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
                <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100/50 bg-gradient-to-r from-blue-600 to-indigo-700">
                    <div className="flex items-center space-x-3 text-white">
                        <Shield className="w-8 h-8" />
                        <div>
                            <span className="text-lg font-bold block leading-tight">Smart Outpass</span>
                            <span className="text-[10px] text-blue-100 uppercase tracking-widest font-medium">CIT Campus</span>
                        </div>
                    </div>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden focus:outline-none text-white/80 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <div className="px-6 py-6 border-b border-gray-100 flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm ring-1 ring-blue-50">
                        {userData?.name ? userData.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div className="overflow-hidden">
                        <p className="font-semibold text-gray-800 truncate">{userData?.name || 'User'}</p>
                        <p className="text-xs text-gray-500 font-mono mt-0.5">Reg: {userData?.regNo || '210401001'}</p> {/* Mock Reg No */}
                    </div>
                </div>

                <nav className="p-4 space-y-1.5 flex-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <button
                                key={item.path}
                                onClick={() => {
                                    navigate(item.path);
                                    setSidebarOpen(false);
                                }}
                                className={`flex items-center w-full px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200 group ${isActive
                                        ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:pl-5'
                                    }`}
                            >
                                <item.icon size={20} className={`mr-3.5 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                                <span className="flex-1 text-left">{item.label}</span>
                                {isActive && <ChevronRight className="w-4 h-4 text-blue-400" />}
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-3.5 text-sm font-medium text-red-600 rounded-xl hover:bg-red-50 transition-all duration-200 group"
                    >
                        <LogOut size={20} className="mr-3.5 group-hover:scale-110 transition-transform" />
                        <span className="flex-1 text-left">Sign Out</span>
                    </button>
                    <p className="text-[10px] text-center text-gray-400 mt-4 font-medium uppercase tracking-widest">v1.0.0 Beta</p>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
                {/* Header for Mobile */}
                <header className="flex items-center justify-between h-16 px-6 bg-white shadow-sm border-b border-gray-100 lg:hidden">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-600 hover:text-gray-900 focus:outline-none transition-colors">
                        <Menu size={24} />
                    </button>
                    <span className="text-lg font-bold text-gray-800">Dashboard</span>
                    <div className="w-6"></div> {/* Spacer */}
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50/50 p-4 md:p-8">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
