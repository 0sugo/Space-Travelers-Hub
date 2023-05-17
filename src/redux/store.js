import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocket/rocketSlice';
import missionReducer from './mission/missionSlice';

const store = configureStore({
  reducer: {
    allRockets: rocketsReducer,
    mission: missionReducer,
  },
});
export default store;
