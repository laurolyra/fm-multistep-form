import { configureStore } from '@reduxjs/toolkit';
import stepperReducer from './slices/stepSlice';

export const store = configureStore({
  reducer: { stepperReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
