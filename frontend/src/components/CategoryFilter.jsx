import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { 
  Palmtree, 
  Mountain, 
  Crown, 
  Wallet, 
  Castle, 
  Sparkles, 
  Compass,
  ArrowUpRight
} from 'lucide-react'; 

const categories = [
  {
    id: 'beach',
    name: 'Beach Resorts',
    icon: Palmtree,
    description: 'Sun, sand & ocean view stays',
    count: '120+ Stays',
    query: 'Best beach view resorts and stays',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
  },
  {
    id: 'mountain',
    name: 'Mountain Views',
    icon: Mountain,
    description: 'Chilly hills & scenic valley cabins',
    count: '95+ Stays',
    query: 'Top mountain view hotel cabins and resorts',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  },
  {
    id: 'luxury',
    name: 'Luxury Villas',
    icon: Crown,
    description: '5-Star amenities & private pools',
    count: '60+ Stays',
    query: 'Luxury 5 star villas with private pool',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
  },
  {
    id: 'budget',
    name: 'Budget Stays',
    icon: Wallet,
    description: 'Pocket-friendly stays under ₹2,500',
    count: '210+ Stays',
    query: 'Best budget hotels under 2500 per night',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
  },
  {
    id: 'heritage',
    name: 'Heritage Forts',
    icon: Castle,
    description: 'Royal palaces & historical stays',
    count: '45+ Stays',
    query: 'Royal heritage palace and fort hotels',
    color: 'text-rose-400 bg-rose-500/10 border-rose-500/20'
  },
  {
    id: 'trending',
    name: 'AI Specials',
    icon: Sparkles,
    description: 'Highest match rate for travelers',
    count: '80+ Stays',
    query: 'AI recommended top trending hotels',
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
  }
];

const CategoryFilter = () => {
  const navigate = useNavigate();
  const [description,setDescription]=useState('')
  const [loading ,setLoading ]=useState(false)
  const handleCategoryClick = async (cat) => {

    setLoading(true);
    try {
      
    const searchQuery = cat.query || cat.description;
  
      const res= await axios.post('http://localhost:5000/api/hotels/ai-search', {prompt:searchQuery })
  
  
  
  
      
  
      
      navigate('/hotels', {
        state: {
  
          hotels:res.data?.hotels || res.data,
              userQuery:description
          // category: cat.name,
          // userQuery: cat.query
        }
      });
    } catch (error) {
      console.error("AI Search Error:", error.response?.data || error.message);
    }finally{
      setLoading(false)
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Compass className="w-3.5 h-3.5" /> Explore By Vibe
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured Categories
        </h2>
        <p className="text-sm sm:text-base text-slate-400 mt-1">
          Pick a category that matches your trip's mood and preference
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat)}
              className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-5 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${cat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text Content */}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {cat.description}
                  </p>
                  <span className="text-[11px] font-semibold text-slate-500 inline-block pt-1">
                    {cat.count}
                  </span>
                </div>
              </div>

              {/* Arrow Button */}
              <div className="w-8 h-8 rounded-full bg-slate-800/60 group-hover:bg-blue-600 border border-slate-700/50 group-hover:border-blue-500 flex items-center justify-center text-slate-400 group-hover:text-white transition-all shrink-0 ml-2">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryFilter;