import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function Register() {
    const { currentUser, userData, loading } = useAuth();
    const navigate = useNavigate();

    const [role, setRole] = useState('student');
    const [department, setDepartment] = useState('CSE');
    const [registerNo, setRegisterNo] = useState('');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!loading && userData) {
            navigate('/dashboard', { replace: true });
        }
    }, [loading, userData, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            if (!currentUser) return;

            const data = {
                uid: currentUser.uid,
                name: currentUser.displayName,
                email: currentUser.email,
                photoURL: currentUser.photoURL,
                role,
                department,
                createdAt: new Date().toISOString()
            };

            if (role === 'student') {
                data.registerNo = registerNo;
            }

            await setDoc(doc(db, 'users', currentUser.uid), data);
            // Force reload to refresh AuthContext state
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert("Failed to create profile");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Complete Your Profile</h2>
                <p className="text-slate-500 mb-6">Select your role to get started.</p>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            value={currentUser?.displayName || ''}
                            disabled
                            className="w-full px-4 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="hod">HOD</option>
                            <option value="warden">Warden</option>
                            <option value="security">Security</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Department</label>
                        <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            {['CSE', 'IT', 'ECE', 'EEE', 'MECH', 'CIVIL', 'AIDS', 'CSBS'].map(d => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                    </div>

                    {role === 'student' && (
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Register Number</label>
                            <input
                                type="text"
                                required
                                placeholder="e.g. 210419104001"
                                value={registerNo}
                                onChange={(e) => setRegisterNo(e.target.value)}
                                className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-blue-700 transition-colors disabled:opacity-70 mt-4"
                    >
                        {submitting ? 'Creating Profile...' : 'Complete Registration'}
                    </button>
                </form>
            </div>
        </div>
    );
}
