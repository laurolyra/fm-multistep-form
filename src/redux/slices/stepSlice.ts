import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepState {
  value: string;
}

const initialState: StepState = {
  value: 'initial',
};

export const stepper = createSlice({
  name: 'step',
  initialState,
  reducers: {
    handleChangeStep: (state, action: PayloadAction<string>) => {
      const newStep = action.payload;
      state.value = newStep;
    },
  },
});

export const { handleChangeStep } = stepper.actions;
export default stepper.reducer;
