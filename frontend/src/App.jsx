import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Dashboard from './pages/Dashboard';
import RequestOutpass from './pages/student/RequestOutpass';
import History from './pages/student/History';

// Protected Route Component
const ProtectedRoute = ({ allowedRoles }) => {
    const { currentUser, userRole, loading } = useAuth();

    if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <div className="p-8 text-center text-red-600">Unauthorized Access ({userRole})</div>;
    }

    return <Outlet />;
};

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    <Route element={<ProtectedRoute />}>
                        <Route element={<DashboardLayout />}>
                            <Route path="/dashboard" element={<Dashboard />} />

                            {/* Student Routes */}
                            <Route path="/student/request" element={<RequestOutpass />} />
                            <Route path="/student/history" element={<History />} />

                            <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        </Route>
                    </Route>

                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
