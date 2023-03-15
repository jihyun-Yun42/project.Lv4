import { configureStore } from '@reduxjs/toolkit';
import houseSlice from '../modules/houseSlice';

const store = configureStore({
  reducer: {
    house: houseSlice,
  },
});
export default store;
