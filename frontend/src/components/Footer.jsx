import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Send, ShieldCheck, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand & Contact Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Hotelo<span className="text-blue-500">.io</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Your premier destination for hassle-free hotel bookings worldwide. Find curated luxury suites, boutique stays, and budget-friendly rooms with instant confirmation.
          </p>
          
          <div className="pt-2 space-y-3 text-sm">
            <a 
              href="mailto:hoteloapp@hotel.com" 
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors w-fit"
            >
              <div className="p-2 bg-slate-900 rounded-md border border-slate-800">
                <Mail className="w-4 h-4 text-blue-500" />
              </div>
              <span>hoteloapp@hotel.com</span>
            </a>
            
            <div className="flex items-center gap-3 text-slate-400">
              <div className="p-2 bg-slate-900 rounded-md border border-slate-800">
                <MapPin className="w-4 h-4 text-blue-500" />
              </div>
              <span>Global Hospitality Center, Suite 100</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li>
              <Link to="/hotels" className="hover:text-white transition-colors font-medium text-blue-400 hover:text-blue-300">
                Book a Hotel
              </Link>
            </li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Account Links */}
        <div>
          <h3 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Account</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
            <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
            <li><Link to="/my-bookings" className="hover:text-white transition-colors">My Bookings</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">Help Center</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Exclusive Deals</h3>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">
            Subscribe to receive member-only hotel discounts and travel perks.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 pl-3 pr-10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-500 text-white px-2.5 rounded-md transition-colors flex items-center justify-center"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" /> Guaranteed zero spam.
            </p>
          </form>
        </div>

      </div>

      {/* Copyright & Legal Bar */}
      <div className="border-t border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hotelo.io. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-slate-400 transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}