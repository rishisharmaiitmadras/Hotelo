import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { fetchUserBookings } from '../features/bookingSlice.js';
import { 
  Building2, MapPin, Calendar, CheckCircle2, 
  Loader2, AlertCircle, ArrowLeft, Hotel 
} from 'lucide-react';

const MyBookings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 1. Redux Store se Data Read karna (useSelector)
  const { userBookings, loading, error } = useSelector((state) => state.bookings);
  const { token } = useSelector((state) => state.auth);

  // 2. Component Mount hone par Action Dispatch karna (useDispatch)
  useEffect(() => {
    const savedToken = token || localStorage.getItem('token');
    if (!savedToken) {
      navigate('/login');
    } else {
      dispatch(fetchUserBookings());
    }
  }, [dispatch, token, navigate]);

  // Date Formatting Helper
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // State 1: Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        <p className="text-slate-400 text-xs">Aapki bookings fetch ho rahi hain...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-16 pt-8">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Hotel className="w-4 h-4" />
              <span>User Dashboard</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold">My Bookings</h1>
          </div>

          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-300 hover:bg-slate-800 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Home Page</span>
          </button>
        </div>

        {/* State 2: Error State */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-xs">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* State 3: Empty State (Jab Bookings na ho) */}
        {!loading && userBookings.length === 0 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-12 text-center max-w-md mx-auto my-12 space-y-4">
            <Building2 className="w-12 h-12 text-blue-400 mx-auto" />
            <h3 className="text-lg font-bold">Koi booking nahi mili!</h3>
            <p className="text-slate-400 text-xs">
              Aapne abhi tak koi room book nahi kiya hai.
            </p>
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white text-xs px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-500 transition-all"
            >
              Hotels Dekhein
            </Link>
          </div>
        )}

        {/* State 4: Bookings List State */}
        {userBookings.length > 0 && (
          <div className="space-y-4">
            {userBookings.map((booking) => {
              const hotelData = booking.hotel || {};
              const roomData = booking.room || {};
              const dates = booking.dates || [];
              const startDate = dates.length > 0 ? dates[0] : null;
              const endDate = dates.length > 0 ? dates[dates.length - 1] : null;

              return (
                <div
                  key={booking._id}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                    <div className="flex gap-4">
                      <img
                        src={hotelData.photos?.[0] || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400'}
                        alt={hotelData.name || 'Hotel'}
                        className="w-20 h-20 rounded-xl object-cover border border-slate-800"
                      />
                      <div className="space-y-1">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Confirmed
                        </span>
                        <h2 className="text-lg font-bold text-white">
                          {hotelData.name || 'Hotel Name'}
                        </h2>
                        <p className="text-slate-400 text-xs flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-blue-400" />
                          <span>{hotelData.address || hotelData.city || 'Location N/A'}</span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 shrink-0">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Price</span>
                      <span className="text-xl font-black text-emerald-400">₹{booking.totalPrice || 0}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase block font-semibold">Room & No.</span>
                      <p className="font-bold text-slate-200 mt-0.5">{roomData.title || 'Standard'}</p>
                      <span className="text-blue-400 text-[11px] font-semibold">
                        Room #{booking.roomNumber}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 text-[10px] uppercase block font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-blue-400" /> Check-In
                      </span>
                      <p className="font-bold text-slate-200 mt-0.5">{formatDate(startDate)}</p>
                    </div>

                    <div>
                      <span className="text-slate-400 text-[10px] uppercase block font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-purple-400" /> Check-Out
                      </span>
                      <p className="font-bold text-slate-200 mt-0.5">{formatDate(endDate)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};

export default MyBookings;