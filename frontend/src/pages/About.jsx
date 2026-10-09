import React from 'react';
import { Link } from 'react-router-dom';
import CountUpModule from 'react-countup';
import { 
  Building2, 
  ShieldCheck, 
  Globe, 
  Clock, 
  Sparkles, 
  Users, 
  Award, 
  ArrowRight 
} from 'lucide-react';
import FAQ from '../components/Faqs';
import AboutHotelo from '../components/AboutHotelo';

// Vite CJS/ESM interop fix (enables direct tag usage)
const CountUp = CountUpModule.default || CountUpModule;

export default function About() {
  const stats = [
    { label: 'Partner Hotels', end: 1200, suffix: '+' },
    { label: 'Happy Travelers', end: 50000, suffix: '+' },
    { label: 'Global Destinations', end: 45, suffix: '+' },
    { label: 'Booking Reliability', end: 99.9, decimals: 1, suffix: '%' },
  ];

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> About Hotelo.io
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Redefining How You Discover & Book Luxury Stays
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Hotelo.io was built on a simple premise: hotel booking should be seamless, transparent, and inspiring.
          </p>
        </div>

        {/* Direct <CountUp /> Tag Usage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-950/60 border border-slate-800 rounded-2xl p-8 shadow-xl">
          {stats.map((item, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-500">
                <CountUp
                  start={0}
                  end={item.end}
                  duration={1.5}
                  decimals={item.decimals || 0}
                  separator=","
                  suffix={item.suffix}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-950/40 border border-slate-800/80 rounded-3xl p-8 lg:p-12">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our Mission to Simplify Travel Hospitality
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Finding the right hotel often means navigating cluttered interfaces and hidden fees. Hotelo.io eliminates the friction by combining intuitive design with real-time room availability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-3">
              <Building2 className="w-10 h-10 text-blue-400" />
              <h3 className="text-base font-semibold text-white">Curated Spaces</h3>
              <p className="text-xs text-slate-400">Strict quality audits for all listed properties.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-3">
              <Award className="w-10 h-10 text-blue-400" />
              <h3 className="text-base font-semibold text-white">Top Rated</h3>
              <p className="text-xs text-slate-400">Trusted by thousands of frequent travelers.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Find Your Next Stay?
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white text-blue-950 hover:bg-slate-100 font-bold px-6 py-3 rounded-xl transition-all shadow-lg active:scale-95 text-sm"
          >
            <span>Explore Hotels</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
      <AboutHotelo />
      <FAQ />
    </div>

    
  );
}