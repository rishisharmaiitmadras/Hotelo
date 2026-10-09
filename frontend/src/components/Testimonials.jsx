import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Aarav Sharma',
    city: 'Delhi',
    bookedStay: 'Booked Taj Exotica, Goa',
    rating: 5,
    review: 'Mujhe Goa trip ke liye budget hotel dhoondne me ghanto lagte the, lekin iske AI search ne 5 second me perfect resort suggest kar diya. Super smooth experience!',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Priya Patel',
    city: 'Mumbai',
    bookedStay: 'Booked Wildflower Hall, Shimla',
    rating: 5,
    review: 'Natural language search worked amazingly well! Maine bas likha "Shimla heated pool resort under 18k" aur exact matching options mil gaye.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Rohan Mehta',
    city: 'Bangalore',
    bookedStay: 'Booked Taj Lake Palace, Udaipur',
    rating: 5,
    review: 'Pricing clean hai aur koi hidden fees nahi lagi checkout par. AI booking feature is definitely a game-changer for quick trip planning.',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Community Trust
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Loved By Travellers
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1">
          See what real guests have to say about their AI booking experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-800 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed italic">
                "{rev.review}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-slate-800/80 mt-6">
              <img
                src={rev.avatar}
                alt={rev.name}
                className="w-11 h-11 rounded-full object-cover border border-slate-700 shrink-0"
              />
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-sm font-bold text-white truncate">{rev.name}</h4>
                <p className="text-xs text-blue-400 font-medium truncate">{rev.bookedStay}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;