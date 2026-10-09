import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const destinations = [
  {
    id: 1,
    name: 'Goa',
    tagline: 'Beaches, Nightlife & Resorts',
    hotelsCount: '350+ Stays',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop',
    popularBadge: 'Top Choice'
  },
  {
    id: 2,
    name: 'Manali',
    tagline: 'Snowy Peaks & Mountain Views',
    hotelsCount: '220+ Stays',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    popularBadge: 'Trending'
  },
  {
    id: 3,
    name: 'Udaipur',
    tagline: 'Royal Palaces & Lake Views',
    hotelsCount: '180+ Stays',
    image: 'https://cdn.britannica.com/57/252557-050-5A6E4416/Udaipur-City-Palace-Rajasthan-India.jpg',
    popularBadge: 'Romantic'
  },
  {
    id: 4,
    name: 'Jaipur',
    tagline: 'Heritage, Culture & Forts',
    hotelsCount: '260+ Stays',
    image: 'https://www.tripsavvy.com/thmb/Afl1v6bgmGid9kPfseymDiAYWa0=/3595x2397/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-518387310-04a30994bfb1461bb8000f1864ca1fc5.jpg',
    popularBadge: 'Heritage'
  },
  {
    id: 5,
    name: 'Kerala',
    tagline: 'Backwaters & Lush Greenery',
    hotelsCount: '200+ Stays',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop',
    popularBadge: 'Nature'
  },
  {
    id: 6,
    name: 'Shimla',
    tagline: 'Hill Station & Pine Forests',
    hotelsCount: '150+ Stays',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=800&auto=format&fit=crop',
    popularBadge: 'Popular'
  }
];

const TrendingDestinations = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false); 


  const handleDestinationClick = async (destination) => {
    // Navigate to /hotels route with destination info in state

    const currentQuery=`${destination.name} me top hotels aur resorts`
    setPrompt(currentQuery)
    setLoading(true);
        try {
          const res = await axios.post('http://localhost:5000/api/hotels/ai-search', { prompt:currentQuery });
          
          console.log("Gemini Extracted Filters / Hotels:", res.data.hotels);
          navigate('/hotels',{
            state:{
    
                hotels:res.data?.hotels || res.data,
                userQuery:currentQuery
            }
          })
          
          
        } catch (error) {
          console.error("AI Search Error:", error.response?.data || error.message);
        } finally {
          setLoading(false);
          
        }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Popular Getaways
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trending Destinations
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-1">
            Explore India's most loved places with AI-curated stay recommendations
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            onClick={() => handleDestinationClick(dest)}
            className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-slate-800/80 hover:border-blue-500/50 shadow-xl transition-all duration-500 hover:-translate-y-1.5"
          >
            {/* Background Image with Zoom Effect */}
            <img
              src={dest.image}
              alt={dest.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-slate-200 text-xs font-semibold rounded-full">
                {dest.popularBadge}
              </span>
              <div className="w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-center text-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>

            {/* Card Content at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
              <div className="flex items-center gap-1.5 text-blue-400 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{dest.hotelsCount}</span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {dest.name}
              </h3>

              <p className="text-xs text-slate-300 line-clamp-1">
                {dest.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingDestinations;