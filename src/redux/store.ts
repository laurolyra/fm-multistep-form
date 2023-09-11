import { configureStore } from '@reduxjs/toolkit';
import stepperReducer from './slices/stepSlice';
import timeReducer from './slices/timeSlice';

export const store = configureStore({
  reducer: { stepperReducer, timeReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
