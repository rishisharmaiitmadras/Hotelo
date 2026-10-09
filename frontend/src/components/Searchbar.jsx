import React, { useState } from 'react'
import { Search, Sparkles, ArrowRight,Loader2 } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Searchbar = () => {
  
const [prompt, setPrompt] = useState('');
const [loading, setLoading] = useState(false); 

const navigate = useNavigate()

const handleAiSearch = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/hotels/ai-search', { prompt });
      
      console.log("Gemini Extracted Filters / Hotels:", res.data.hotels);
   
      navigate('/hotels',{
        state:{

            hotels:res.data?.hotels || res.data,
            userQuery:prompt
        }
      })
      
    } catch (error) {
      console.error("AI Search Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
      
    }
};
  return (
    <>
    <div className="w-full max-w-4xl mx-auto px-4 space-y-4">
      
      {/* Main Single AI Search Input */}
      <form onSubmit={handleAiSearch}>
        <div className="relative flex items-center bg-slate-900/90 backdrop-blur-xl border border-slate-800 hover:border-blue-500/50 focus-within:border-blue-500 rounded-2xl md:rounded-full p-2.5 sm:p-3 shadow-2xl shadow-blue-900/20 transition-all duration-300">
          
          {/* AI Sparkle Icon */}
          <div className="pl-3 pr-2 text-blue-400 flex items-center gap-2 shrink-0">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>

          {/* Single Natural Language Input */}
          <input
            type="text"
            value={prompt}
            onChange={(e)=>setPrompt(e.target.value)}
            placeholder="Goa me 2 logon ke liye beach resort budget 5k next weekend..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none font-medium px-2 py-1"
          />

          {/* Submit Search Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl md:rounded-full font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 active:scale-95 flex items-center gap-2 cursor-pointer shrink-0 ml-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="hidden sm:inline">Searching...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
                <ArrowRight className="w-4 h-4 sm:hidden" />
              </>
            )}
          </button>

        </div>
      </form>

      {/* Example Hinglish Suggestion Chips (User Guidance) */}
      <div className="flex items-center justify-center flex-wrap gap-2 text-xs text-slate-400">
        <span className="text-slate-500 font-medium">Try asking:</span>
        
        <button 

          type="button"
          onClick={()=>setPrompt("Manali me 3 nights luxury stay under 10k")}
          className="bg-slate-900/60 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-full text-slate-300 transition-colors cursor-pointer"
        >
          "Manali me 3 nights luxury stay under 10k"
        </button>

        <button 
          type="button"
          onClick={()=>setPrompt("Udaipur lake view hotel for couple next week")}
          className="bg-slate-900/60 hover:bg-slate-800 border border-slate-800 px-3 py-1.5 rounded-full text-slate-300 transition-colors cursor-pointer"
        >
          "Udaipur lake view hotel for couple next week"
        </button>
      </div>

    </div>
    </>
    
  )
}

export default Searchbar