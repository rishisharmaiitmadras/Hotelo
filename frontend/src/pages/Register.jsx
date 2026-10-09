import React, { useState } from 'react'
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  UserPlus, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
const Register = () => {

  const [formData,setFormData]=useState([
      {
        name: "",
        email:"",
        password:"",
        confirmPassword:"",
      }
    ])

  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  const [status,setStatus]=useState({loading:false , error:'',success:false})
  const navigate =useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
    const handleSubmit =async (e) => {
      e.preventDefault();
      setStatus({ loading: true, error: '', success: false });
  
    
    
    //password match validation
    if(formData.password!=formData.confirmPassword){
      setStatus({ loading: false, error: 'Passwords do not match!', success: false });
        return;
    }
  
    if(formData.password<6){
      setStatus({loading:false,error:'password should be more than 6 character ',success: false})
      return ;
    }
    try{
    const res = await axios.post('http://localhost:5000/api/auth/register',formData);
    
    setStatus({loading:false,error:'',success:true})
  
  
    setTimeout(() => {
          navigate('/Login');
    }, 2000);
      
    
  
  
  }
  catch (error) {
    // 4. Backend Error Handling (res.status === 400 / 500)
      // error.response.data.message se backend wala error text mil jayega
      const backendError = error.response?.data?.message || 'Server connection failed!';
      
      setStatus({ 
        loading: false, 
        error: backendError, 
        success: false 
      });
    
  }
}

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-950/80 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Join Us Today
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Create an Account
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Fill in your details to get started with Hotelo.io
          </p>
        </div>

        {/* Status Alerts */}
        {status.error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-center gap-2.5 text-xs font-medium">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{status.error}</span>
          </div>
        )}

        {status.success && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center gap-2.5 text-xs font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Account created successfully! You can now log in.</span>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Full Name <span className="text-blue-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Email Address <span className="text-blue-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Password <span className="text-blue-500">*</span>
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Confirm Password <span className="text-blue-500">*</span>
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3.5 top-3 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
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
              <span>Creating Account...</span>
            ) : (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Register Account</span>
              </>
            )}
          </button>
        </form>

        {/* Navigation to Login */}
        <div className="text-center text-xs text-slate-400 pt-3 border-t border-slate-800/80">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
            Sign In
          </Link>
        </div>

      </div>
    </div>
    
  )
}

export default Register