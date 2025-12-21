import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setError(err.code ? `Error: ${err.code}` : 'Invalid credentials. Please check your email and password.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-3xl opacity-60 animate-pulse delay-700"></div>
            </div>

            <div className="w-full max-w-lg p-8 z-10">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-4 ring-1 ring-white/30 shadow-lg">
                                <ShieldCheck className="text-white w-8 h-8" />
                            </div>
                            <h1 className="text-3xl font-bold text-white tracking-tight">Smart Outpass</h1>
                            <p className="text-blue-100 mt-2 text-sm font-medium tracking-wide uppercase opacity-90">Chennai Institute of Technology</p>
                        </div>
                    </div>

                    <div className="p-8 pt-10">
                        <div className="text-center mb-8">
                            <h2 className="text-xl font-semibold text-gray-800">Welcome Back</h2>
                            <p className="text-gray-500 text-sm mt-1">Secure access for students and faculty</p>
                        </div>

                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg flex items-start animate-fade-in-down">
                                <div className="ml-2">
                                    <p className="text-sm text-red-700 font-medium">{error}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                                    Institutional Email
                                </label>
                                <div className={`relative group transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.01]' : ''}`}>
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className={`h-5 w-5 transition-colors ${focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'}`} />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 block transition-all outline-none placeholder-gray-400 ${focusedField === 'email' ? 'bg-white shadow-sm' : ''}`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="you@citchennai.edu.in"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                                    Password
                                </label>
                                <div className={`relative group transition-all duration-300 ${focusedField === 'password' ? 'scale-[1.01]' : ''}`}>
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className={`h-5 w-5 transition-colors ${focusedField === 'password' ? 'text-blue-600' : 'text-gray-400'}`} />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className={`w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 block transition-all outline-none placeholder-gray-400 ${focusedField === 'password' ? 'bg-white shadow-sm' : ''}`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onFocus={() => setFocusedField('password')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-500/30 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {loading ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Authenticating...
                                    </div>
                                ) : (
                                    <>
                                        Sign In to Portal
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-8 text-center border-t border-gray-100 pt-6">
                            <p className="flex justify-center items-center text-xs text-gray-400">
                                <Lock className="w-3 h-3 mr-1" />
                                Your data is securely protected
                            </p>
                            <p className="mt-4 text-xs text-gray-300 font-medium">
                                © Chennai Institute of Technology – Smart Campus
                            </p>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
