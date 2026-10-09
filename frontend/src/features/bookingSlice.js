import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 1. Async Thunk - User Bookings Fetch Karne Ke Liye
export const fetchUserBookings = createAsyncThunk(
  'bookings/fetchUserBookings',
  async (_, { getState, rejectWithValue }) => {
    try {
      // Redux Auth Slice se token access kar rahe hain
      const state = getState();
      const token = state.auth.token || localStorage.getItem('token');

      if (!token) {
        return rejectWithValue('User authenticated nahi hai.');
      }

      const response = await axios.get('http://localhost:5000/api/bookings/my-bookings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      return response.data; // Action payload banega
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Bookings fetch nahi ho paayi.'
      );
    }
  }
);

// 2. Initial State
const initialState = {
  userBookings: [],
  loading: false,
  error: null,
};

// 3. Slice Creation
export const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    clearBookingError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Request start hui
      .addCase(fetchUserBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Request success hui
      .addCase(fetchUserBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.userBookings = action.payload;
      })
      // Request fail hui
      .addCase(fetchUserBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBookingError } = bookingSlice.actions;
export default bookingSlice.reducer;