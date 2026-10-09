import React, { useState } from 'react';
import { MapPin, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import HotelCard from './../components/HotelCard.jsx';

const Hotels = () => {
  const location = useLocation();

  // Location state se initial data
  const initialHotels = location.state?.hotels || [];
  const userQuery = location.state?.userQuery || '';
  const initialCity = location.state?.city || initialHotels[0]?.city || '';

  // Local States
  const [hotelsList, setHotelsList] = useState(initialHotels);
  const [cityName, setCityName] = useState(initialCity);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  // Price Filters State
  const [minPrice, setMinPrice] = useState(location.state?.minPrice || '');
  const [maxPrice, setMaxPrice] = useState(location.state?.maxPrice || '');


  // Dates apply karke Backend filter API call karne ka handler
  const handleApplyDates = async () => {
    console.log("Button Clicked")
    if (!startDate || !endDate) return;

    console.log("passes startdate")
    

    
    setLoading(true);
    try {
      // Backend Route Ko Query Parameters ke saath call karenge
      const res = await axios.get(`http://localhost:5000/api/hotels/get`, {
        params: {
          city: cityName,
          minPrice: minPrice !== '' ? Number(minPrice) : undefined,
          maxPrice: maxPrice !== '' ? Number(maxPrice) : undefined,
          startDate:startDate || undefined,
          endDate:endDate || undefined,
          
          
        }
      });

    
      console.log(res.data)
      // Filtered hotels se state update
      setHotelsList(res.data);
    } catch (error) {
      console.error("Error filtering hotels by date:", error);
    } finally {
      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-12">
      
      {/* Top Header Section */}
      <div className="w-full bg-slate-950/80 border-b border-slate-800/80 backdrop-blur-xl py-6 px-4 mb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Search Results</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              You are exploring hotels in <span className="text-blue-400 capitalize">{cityName}</span>
            </h1>

            {userQuery && (
              <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Prompt: <strong className="text-slate-300">"{userQuery}"</strong></span>
              </p>
            )}
          </div>

          {/* Date Range Selector Box */}
          <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-2xl flex flex-col sm:flex-row items-center gap-2 shadow-xl shrink-0">
            
            {/* Start Date */}
            <div className="w-full sm:w-auto flex items-center gap-3 bg-slate-950/70 border border-slate-800 rounded-xl px-3.5 py-2">
              <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Start Date</span>
                <input 
                  type="date" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="bg-transparent text-xs text-white focus:outline-none [color-scheme:dark] cursor-pointer"
                />
              </div>
            </div>

            <span className="hidden sm:inline text-slate-600 font-bold text-xs">to</span>

            {/* End Date */}
            <div className="w-full sm:w-auto flex items-center gap-3 bg-slate-950/70 border border-slate-800 rounded-xl px-3.5 py-2">
              <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">End Date</span>
                <input 
                  type="date" 
                  value={endDate}
                  min={startDate || undefined}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="bg-transparent text-xs text-white focus:outline-none [color-scheme:dark] cursor-pointer"
                />
              </div>
            </div>

            {/* Apply Button */}
            <button 
              type="button"
              onClick={handleApplyDates}
              disabled={loading || !startDate || !endDate}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-semibold px-4 py-3 sm:py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
            >
              <span>{loading ? 'Checking...' : 'Apply Dates'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>
      </div>

      {/* Hotel Stream Render */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-5">
          {hotelsList && hotelsList.filter(Boolean).length > 0 ? (
            hotelsList.filter(Boolean).map((hotel) => (
              <HotelCard key={hotel._id || hotel.id} hotel={hotel} />
            ))
          ) : (
            <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl">
              <p className="text-slate-400 text-base">
                {startDate && endDate 
                  ? `No available rooms found in ${cityName} between ${startDate} and ${endDate}.` 
                  : `No hotels found in ${cityName}.`}
              </p>
              <p className="text-slate-500 text-xs mt-1">Try selecting different check-in/check-out dates.</p>
            </div>
          )}
        </div>
      </main>

    </div>
  );
};

export default Hotels;