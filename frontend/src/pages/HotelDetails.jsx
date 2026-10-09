import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { 
  MapPin, Calendar, CheckCircle2, AlertCircle, 
  Sparkles, Bed, ShieldCheck, CreditCard, ArrowRight, Loader2, Users 
} from 'lucide-react';

const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Redux Auth State
  const auth = useSelector((state) => state.auth);
  const token = auth?.token || localStorage.getItem('token');
  const isLoggedIn = auth?.isLoggedIn || Boolean(token);

  // Data States
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Booking Form States
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedRoomNumber, setSelectedRoomNumber] = useState('');

  // Booking Submission States
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState('');
  const [bookingError, setBookingError] = useState('');

  // 1. Hotel Data Fetch
  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:5000/api/hotels/${id}`);
        
        setHotel(res.data);
        
      } catch (err) {
        console.error("Error fetching hotel details:", err);
        setError(err.response?.data?.message || 'Hotel details load nahi ho paaye.');
      } finally {
        
        setLoading(false);
      }
    };

    if (id) fetchHotelDetails();
  }, [id]);

  // 2. Calculate Nights Stay
  const calculateNights = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const nights = Math.ceil(diffTime / (1000 * 3600 * 24));
    return nights > 0 ? nights : 0;
  };

  const totalNights = calculateNights();
  const roomPricePerNight = Number(selectedRoom?.price || 0);
  // Nights selected nahi hain tab bhi 1 night ka default rate dikhayega
  const totalPrice = totalNights > 0 ? totalNights * roomPricePerNight : roomPricePerNight;

  // 3. Room Selection Handler
  const handleSelectRoom = (room) => {
    
    setSelectedRoom(room);
    setSelectedRoomNumber(''); // Naya room choose karne par purana room number reset
  };

  // 4. Booking Submission
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingError('');
    setBookingSuccess('');

    if (!isLoggedIn) {
      return navigate('/login', { state: { from: `/hotels/${id}` } });
    }

    if (!startDate || !endDate) {
      return setBookingError('Kripya Check-In aur Check-Out dono dates select karein.');
    }
    if (totalNights <= 0) {
      return setBookingError('Check-Out date Check-In ke baad ki honi chahiye.');
    }
    if (!selectedRoom || !selectedRoomNumber) {
      return setBookingError('Kripya ek Room category aur Room Number dono select karein.');
    }

    setBookingLoading(true);

    try {
      const payload = {
        hotelId: id,
        roomId: selectedRoom._id,
        roomNumber: Number(selectedRoomNumber),
        startDate,
        endDate
      };

      await axios.post(
        'http://localhost:5000/api/bookings', 
        payload, 
        { 
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true 
        }
      );

      setBookingSuccess('🎉 Room booking successful ho gayi hai!');
      
      setTimeout(() => {
        navigate('/mybookings');
      }, 2000);

    } catch (err) {
      console.error("Booking error:", err);
      setBookingError(err.response?.data?.message || 'Booking fail ho gayi. Kripya firse try karein.');
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error || !hotel) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-4">
        <AlertCircle className="w-12 h-12 text-red-500" />
        <p className="text-slate-400 text-sm">{error || 'Hotel nahi mila.'}</p>
        <button 
          onClick={() => navigate(-1)} 
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-semibold"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-16 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Hotel</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">{hotel.name}</h1>
          <p className="text-slate-400 text-xs sm:text-sm flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
            <span>{hotel.address || hotel.city}</span>
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900">
          <div className="md:col-span-2 h-64 md:h-96">
            <img 
              src={hotel.photos?.[0] || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800'} 
              alt={hotel.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-3 h-96">
            <img 
              src={hotel.photos?.[1] || hotel.photos?.[0] || 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800'} 
              alt="Room Preview" 
              className="w-full h-full object-cover"
            />
            <img 
              src={hotel.photos?.[2] || hotel.photos?.[0] || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800'} 
              alt="Interior Preview" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Rooms List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <Bed className="w-5 h-5 text-blue-400" />
                <span>Select Room Category</span>
              </h2>
              <span className="text-xs text-slate-400">{hotel.rooms?.length || 0} Room Types Available</span>
            </div>

            {hotel.rooms && hotel.rooms.length > 0 ? (
              <div className="space-y-4">
                {hotel.rooms.map((room, roomIndex) => {
                  // Safe comparison with fallback index
                  const isSelected = selectedRoom ? (selectedRoom._id ? selectedRoom._id === room._id : selectedRoom === room) : false;
                  
                  return (
                    <div 
                      key={room._id || `room-cat-${roomIndex}`}
                      onClick={() => handleSelectRoom(room)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-blue-950/20 border-blue-500 shadow-xl shadow-blue-500/10' 
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                        <div className="space-y-1">
                          <h3 className="text-lg font-bold text-white">{room.title}</h3>
                          <p className="text-xs text-slate-400 max-w-md">{room.desc || 'Air conditioning, Free Wi-Fi, Attached bathroom.'}</p>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                            <Users className="w-3.5 h-3.5 text-blue-400" />
                            <span>Max Guests: <strong>{room.maxPeople || 2}</strong></span>
                          </div>
                        </div>
                        <div className="text-left sm:text-right shrink-0">
                          <span className="text-2xl font-black text-emerald-400">₹{room.price}</span>
                          <span className="text-xs text-slate-400 block">/ night</span>
                        </div>
                      </div>

                      {/* Specific Room Numbers (Only visible when room is selected) */}
                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-slate-800">
                          <p className="text-xs font-semibold text-slate-300 mb-2">Choose Specific Room Number:</p>
                          <div className="flex flex-wrap gap-2">
                            {room.roomNumbers?.map((rn, rnIndex) => {
                              const isNumSelected = String(selectedRoomNumber) === String(rn.number);
                              return (
                                <button
                                  key={rn._id || `room-num-${rn.number}-${rnIndex}`}
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation(); // Card click event parent tak na jaye
                                    setSelectedRoomNumber(rn.number);
                                  }}
                                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                                    isNumSelected
                                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                  }`}
                                >
                                  Room {rn.number}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center text-slate-400 text-sm">
                Is hotel ke liye koi room available nahi hai.
              </div>
            )}
          </div>

          {/* Right Column: Checkout Box */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl sticky top-6 shadow-2xl space-y-5">
              
              <h3 className="text-lg font-bold border-b border-slate-800 pb-3 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-400" />
                <span>Booking Summary</span>
              </h3>

              {/* Date Selection */}
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 block">Check-In Date</label>
                  <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <input 
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="bg-transparent text-xs text-white focus:outline-none w-full [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 block">Check-Out Date</label>
                  <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <input 
                      type="date"
                      value={endDate}
                      min={startDate || undefined}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="bg-transparent text-xs text-white focus:outline-none w-full [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Selected Category:</span>
                  <span className="text-white font-medium">{selectedRoom ? selectedRoom.title : 'Not selected'}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Selected Room No:</span>
                  <span className="text-white font-medium">{selectedRoomNumber ? `#${selectedRoomNumber}` : 'Not selected'}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Price / Night:</span>
                  <span className="text-white font-medium">₹{roomPricePerNight}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Total Duration:</span>
                  <span className="text-white font-medium">{totalNights} Night(s)</span>
                </div>
                
                <div className="border-t border-slate-800 pt-2.5 mt-2 flex justify-between items-center">
                  <span className="font-bold text-slate-200 text-sm">Total Price:</span>
                  <span className="text-2xl font-black text-emerald-400">₹{totalPrice}</span>
                </div>
              </div>

              {/* Feedback Alerts */}
              {bookingError && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{bookingError}</span>
                </div>
              )}

              {bookingSuccess && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{bookingSuccess}</span>
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="button"
                onClick={handleBookingSubmit}
                disabled={bookingLoading || !selectedRoom || !selectedRoomNumber}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer text-xs uppercase tracking-wider"
              >
                {bookingLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Booking Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm & Pay Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Secure 256-bit Encrypted Booking</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export {HotelDetails};