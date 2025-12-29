import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";
    const [error, setError] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailLoading, setIsEmailLoading] = useState(false);

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        setIsEmailLoading(true);
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate(from, { replace: true });
        } catch (err) {
            console.error(err);
            setError(`Failed to sign in: ${err.code} - ${err.message}`);
        } finally {
            setIsEmailLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({ hd: "citchennai.net" });
            const result = await signInWithPopup(auth, provider);
            navigate(from, { replace: true });
        } catch (err) {
            console.error(err);
            setError(`Failed to sign in: ${err.code} - ${err.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden font-sans">
            {/* Background Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700" />

            <div className="relative z-10 w-full max-w-md p-8 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800">Smart Outpass</h2>
                    <p className="text-slate-500 mt-2">CIT Digital Gate System</p>
                </div>

                {error && <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm text-center">{error}</div>}

                <form onSubmit={handleEmailLogin} className="space-y-4 mb-6">
                    <div>
                        <input
                            type="email"
                            required
                            placeholder="Institutional Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isEmailLoading}
                        className="w-full py-3 px-4 bg-primary text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200 disabled:opacity-70"
                    >
                        {isEmailLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                    <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-slate-400">Or continue with</span></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl flex items-center justify-center gap-3 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
                >
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                    Sign in with Institutional Mail
                </button>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
                    Authorized Person & Students Only
                    <br />
                    @citchennai.net
                </div>
            </div>
        </div>
    );
}
