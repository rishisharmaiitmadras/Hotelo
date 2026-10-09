import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Sparkles, Wifi, Coffee, Waves, ArrowRight, ShieldCheck } from 'lucide-react';
import { useSelector } from 'react-redux';

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
    
     const data =useSelector((state)=>state.auth)
     const user=data.user
      const isLoggedIn=data.isLoggedIn;
  // Navigation Handler to Individual Hotel Details Page
  const handleViewHotel = () => {

    if(!isLoggedIn){
        return navigate('/login',{ state: { from: `/hotels/${hotel._id}` } });
    }
    

    navigate(`/hotels/${hotel._id}`);
  };

  // Cover image with fallback
  const coverImage = hotel.photos?.[0] || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800';

  return (
    <div 
      onClick={handleViewHotel}
      className="group bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col md:flex-row cursor-pointer"
    >
      {/* Left: Image Container */}
      <div className="relative w-full md:w-72 h-52 md:h-auto shrink-0 overflow-hidden bg-slate-950">
        <img 
          src={coverImage} 
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
        
        {/* Featured / AI Match Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md border border-blue-400/30 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg">
          <Sparkles className="w-3 h-3 text-yellow-300 animate-pulse" />
          <span>{hotel.featured ? 'AI Recommended' : 'Top Choice'}</span>
        </div>

        {/* Property Type Tag */}
        <div className="absolute bottom-3 left-3 md:hidden text-xs text-slate-300 bg-slate-950/80 px-2.5 py-0.5 rounded-md backdrop-blur-sm border border-slate-800">
          {hotel.type || 'Resort'}
        </div>
      </div>

      {/* Right: Details & Pricing Section */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        
        {/* Top Header: Title, City & Ratings */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="hidden md:inline-block text-[11px] font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20 mb-1.5">
                {hotel.type || 'Hotel'}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                {hotel.name}
              </h3>
            </div>

            {/* Rating Badge */}
            <div className="flex items-center gap-1 bg-slate-800/90 border border-slate-700/80 px-2.5 py-1 rounded-xl shrink-0">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-bold text-white">{hotel.rating || '4.5'}</span>
            </div>
          </div>

          {/* Location / Address */}
          <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-2">
            <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="truncate">{hotel.address || `${hotel.city}, India`}</span>
            {hotel.distance && (
              <span className="text-slate-500 font-medium">• {hotel.distance}</span>
            )}
          </p>

          {/* AI Brief Insight */}
          {hotel.title && (
            <p className="text-xs text-slate-300 mt-2.5 line-clamp-1 bg-slate-950/50 p-2 rounded-lg border border-slate-800/60 italic">
              "{hotel.title}"
            </p>
          )}
        </div>

        {/* Middle: Amenity Chips */}
        <div className="flex items-center gap-3 text-xs text-slate-400 pt-1 border-t border-slate-800/60">
          <div className="flex items-center gap-1">
            <Wifi className="w-3.5 h-3.5 text-blue-400" />
            <span>Free WiFi</span>
          </div>
          <div className="flex items-center gap-1">
            <Waves className="w-3.5 h-3.5 text-cyan-400" />
            <span>Pool</span>
          </div>
          <div className="flex items-center gap-1">
            <Coffee className="w-3.5 h-3.5 text-amber-400" />
            <span>Breakfast</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Free Cancellation</span>
          </div>
        </div>

        {/* Bottom Bar: Price & CTA */}
        <div className="flex items-end justify-between pt-3 border-t border-slate-800/80 gap-3">
          
          {/* Price Section */}
          <div>
            <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Starts from</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-white">
                ₹{hotel.cheapestPrice?.toLocaleString('en-IN') || '3,500'}
              </span>
              <span className="text-xs text-slate-400 font-medium">/ night</span>
            </div>
            <span className="text-[10px] text-slate-500 block">+ ₹450 taxes & fees</span>
          </div>

          {/* Book / View Details Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Parent card click duplicate event rokne ke liye
              handleViewHotel();
            }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 group-hover:translate-x-0.5 cursor-pointer"
          >
            <span>View Rooms</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </div>
  );
};

export default HotelCard;