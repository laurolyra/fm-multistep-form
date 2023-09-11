import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TimeSlice {
  monthly: boolean;
}

const initialState: TimeSlice = {
  monthly: true,
};

export const time = createSlice({
  name: 'time',
  initialState,
  reducers: {
    handleChangeTime: (state, action: PayloadAction<boolean>) => {
      state.monthly = action.payload;
    },
  },
});

export const { handleChangeTime } = time.actions;
export default time.reducer;
