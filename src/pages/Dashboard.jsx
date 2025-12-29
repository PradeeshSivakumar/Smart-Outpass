import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';
import StudentDashboard from './student/StudentDashboard';
import TeacherDashboard from './teacher/TeacherDashboard';
import HODDashboard from './hod/HODDashboard';
import WardenDashboard from './warden/WardenDashboard';
import SecurityDashboard from './security/SecurityDashboard';

export default function Dashboard() {
    const { userData, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !userData) {
            navigate('/register');
        }
    }, [loading, userData, navigate]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
    );

    if (!userData) return null;

    const renderDashboard = () => {
        switch (userData.role) {
            case 'student': return <StudentDashboard />;
            case 'teacher': return <TeacherDashboard />;
            case 'hod': return <HODDashboard />;
            case 'warden': return <WardenDashboard />;
            case 'security': return <SecurityDashboard />;
            case 'admin': return <div className="p-10 text-center">Admin Console Coming Soon</div>; // Placeholder
            default: return <StudentDashboard />; // Fallback
        }
    };

    return (
        <DashboardLayout>
            {renderDashboard()}
        </DashboardLayout>
    );
}
