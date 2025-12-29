import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ApplyPass from './pages/student/ApplyPass';
import QRCodePage from './pages/student/QRCodePage';
import GateScan from './pages/security/GateScan';
import GateLogs from './pages/security/GateLogs';
import DashboardLayout from './components/layout/DashboardLayout';
import HODAnalyticsPage from './pages/hod/HODAnalyticsPage';
import WardenAnalyticsPage from './pages/warden/WardenAnalyticsPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

          <Route path="/approvals" element={
            <ProtectedRoute allowedRoles={['teacher', 'hod', 'warden']}>
              <Dashboard />
            </ProtectedRoute>
          } />

          <Route path="/analytics" element={
            <ProtectedRoute allowedRoles={['hod']}>
              <HODAnalyticsPage />
            </ProtectedRoute>
          } />

          <Route path="/warden/analytics" element={
            <ProtectedRoute allowedRoles={['warden']}>
              <WardenAnalyticsPage />
            </ProtectedRoute>
          } />

          <Route path="/apply" element={
            <ProtectedRoute allowedRoles={['student']}>
              <ApplyPass />
            </ProtectedRoute>
          } />

          <Route path="/qr" element={
            <ProtectedRoute allowedRoles={['student']}>
              <DashboardLayout>
                <QRCodePage />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/scan" element={
            <ProtectedRoute allowedRoles={['security', 'warden', 'admin']}>
              <DashboardLayout>
                <GateScan />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/logs" element={
            <ProtectedRoute allowedRoles={['security', 'warden', 'admin']}>
              <DashboardLayout>
                <GateLogs />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
