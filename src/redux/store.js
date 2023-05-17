import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    allRockets: rocketsReducer,
  },
});
export default store;
