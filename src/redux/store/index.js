import { configureStore } from '@reduxjs/toolkit';
import factSlice from '../slices/factSlice';

const store = configureStore({
  reducer: factSlice
});

export default store;