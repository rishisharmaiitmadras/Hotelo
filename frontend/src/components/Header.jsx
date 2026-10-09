import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Sparkles, Menu, X, LogIn, UserIcon, LogOut } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice.js';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState({ loading: false, error: "", success: false });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'My-Bookings', path: '/mybookings' }
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.auth);
  const isLoggedIn = data.isLoggedIn;
  const user = data.user;

  // Reusable Logout Function (Desktop & Mobile Dono Ke Liye)
  const handleLogout = () => {
    dispatch(logout());
    setIsOpen(false); // Mobile menu band karne ke liye
    setStatus({ loading: true, error: '', success: false });
    
    setTimeout(() => {
      navigate('/login');
      setStatus({ loading: false, error: '', success: true });
    }, 500);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white group">
          <div className="bg-blue-600 text-white p-2 rounded-xl group-hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <span>
            Hotelo<span className="text-blue-500">.io</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-blue-400 ${
                  isActive ? 'text-blue-500 font-semibold' : 'text-slate-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
          
        {/* Right Corner: Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              {/* User Name Badge */}
              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3.5 py-2 rounded-xl text-slate-200 text-sm font-medium">
                <UserIcon className="w-4 h-4 text-blue-400" />
                <span>Hi {user?.name || "User"}</span>
              </div> 

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 font-medium text-sm px-4 py-2 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/25 active:scale-95"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Dynamic Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 pt-2 pb-6 space-y-4">
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium transition-colors ${
                  isActive ? 'text-blue-500 font-semibold' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Dynamic Mobile Auth Section */}
          <div className="pt-3 border-t border-slate-800 space-y-3">
            {isLoggedIn ? (
              <>

                

                {/* Mobile Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 w-full bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 font-medium text-sm py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              /* Mobile Login Button */
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-2.5 rounded-lg transition-colors shadow-md shadow-blue-600/20"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}