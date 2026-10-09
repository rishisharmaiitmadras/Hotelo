import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  LogIn, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2 
} from 'lucide-react';
import { login } from '../features/authSlice.js';

const Login = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const location = useLocation(); 
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Bug Fix: "false" string ki jagah boolean false
  const [status, setStatus] = useState({ loading: false, error: "", success: false }); 
  const [showPassword, setShowPassword] = useState(false);

  // Bug Fix: 'e' event parameter add kiya
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: false });

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(res.data)
      console.log(res.data.user)
      // Best Practice: Backend se aane wala token save karein
      if (res.data?.token) {
        dispatch(login({ 
          token: res.data.token, 
          user: res.data.user 
          
        }));
      }


      setStatus({ loading: false, error: '', success: true });

      setTimeout(() => {
        const redirectPath = location.state?.from || '/';
    
        navigate(redirectPath);
      }, 2000);

    } catch (error) {
      const backendError = error.response?.data?.message || 'Server connection failed!';

      setStatus({
        loading: false,
        error: backendError,
        success: false,
        
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-950/80 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">

        {/* Header Section */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Welcome Back
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Sign In to Account
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Enter your details to log in to your dashboard
          </p>
        </div>

        {/* Dynamic Status Alerts */}
        {status.error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-center gap-2.5 text-xs font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{status.error}</span>
          </div>
        )}

        {status.success && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center gap-2.5 text-xs font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Login successful! Redirecting to home...</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                placeholder="you@example.com"
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Password
              </label>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                placeholder="••••••••"
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 rounded-xl transition-all shadow-lg shadow-blue-600/25 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50 mt-2 cursor-pointer"
          >
            {status.loading ? (
              <span>Signing In...</span>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </>
            )}
          </button>
        </form>

        {/* Navigation to Register */}
        <div className="text-center text-xs text-slate-400 pt-3 border-t border-slate-800/80">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            Register Here
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;