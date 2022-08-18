import { configureStore } from '@reduxjs/toolkit';
import controlSlice from './controlSlice';

export const store = configureStore({
  reducer: {
    control : controlSlice,
  },
});