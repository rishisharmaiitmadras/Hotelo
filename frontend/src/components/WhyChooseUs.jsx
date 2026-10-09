import React from 'react';
import { Bot, ShieldCheck, Wallet, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Bot,
    title: 'Smart AI Search',
    description: 'Type naturally like "Goa beach resort under 5k" and get exact matching stays instantly.',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: 'Verified Stays',
    description: 'Every hotel is handpicked and AI-checked for quality, cleanliness, and real guest reviews.',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  },
  {
    id: 3,
    icon: Wallet,
    title: 'Zero Hidden Fees',
    description: 'Transparent pricing with no surprise charges at checkout. What you see is what you pay.',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
  },
  {
    id: 4,
    icon: Zap,
    title: 'Instant AI Support',
    description: 'Get 24/7 instant answers to your booking queries and itinerary recommendations.',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Why Choose Us
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Smarter Stays, Zero Effort
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1">
          Here is why thousands of travelers prefer booking through our AI platform
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 space-y-4"
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;