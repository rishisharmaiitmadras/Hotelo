import React from 'react';
import { Sparkles, Cpu, Target, ShieldCheck, Zap, Globe, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Cpu,
    title: 'Natural Language Search',
    description: 'Skip complex dropdowns. Type queries naturally like "Goa beach resort under 5k with pool" and let AI do the rest.',
    accent: 'from-blue-500/20 to-cyan-500/10 text-blue-400 border-blue-500/30'
  },
  {
    icon: Target,
    title: 'Dynamic AI Match Score',
    description: 'Every stay gets a real-time match percentage calculated by comparing your exact prompt to verified hotel attributes.',
    accent: 'from-purple-500/20 to-pink-500/10 text-purple-400 border-purple-500/30'
  },
  {
    icon: ShieldCheck,
    title: 'Transparent & Verified',
    description: 'Zero hidden fees at checkout, AI-checked guest reviews, and 256-bit SSL encrypted safe bookings.',
    accent: 'from-emerald-500/20 to-teal-500/10 text-emerald-400 border-emerald-500/30'
  }
];

const highlights = [
  'Conversational Prompt-to-Stay Parsing',
  '1-Click Curated Vibe Categories',
  'Real-Time AI Match Percentages',
  'Transparent Pricing with Zero Hidden Taxes',
  '24/7 Live AI Customer Support',
  'Verified Guest Reviews & Cleanliness Checks'
];

const AboutHotelo = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Badge & Title */}
      <div className="text-center mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Reimagining Travel Search
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Hotelo.io</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Hotelo.io is a next-generation AI travel platform built to replace rigid multi-select filters with intent-driven conversational stays discovery.
        </p>
      </div>

      {/* Main Vision Banner */}
      <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 mb-10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Say Goodbye to 50+ Manual Checkboxes & Confusing Filters
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Traditional online travel agencies force you to adjust endless price sliders, location radius limits, and amenity tags. 
              <strong> Hotelo.io places everyday human language at the center of discovery.</strong>
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Whether you need a quiet sunset villa in Udaipur or an adventure hub in Manali under ₹8,000, our LLM engine analyzes your exact intent and returns structured stays with instant match scores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Platform Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-400">98%</span>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Search Accuracy</p>
            </div>
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-purple-400">10k+</span>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">AI Stays Booked</p>
            </div>
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400">0%</span>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Hidden Fees</p>
            </div>
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-400">&lt; 5s</span>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Avg AI Response</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Architecture Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`bg-slate-900/60 border rounded-2xl p-6 bg-gradient-to-br ${item.accent} space-y-3 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutHotelo;