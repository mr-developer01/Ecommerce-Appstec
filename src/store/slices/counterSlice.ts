import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../appStore';

export interface CounterState {
  value: number;
  fname: string;
}

const initialState: CounterState = {
  value: 0,
  fname: 'Rahul',
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;
export const selectCountFname = (state: RootState) => state.counter.fname;

export default counterSlice.reducer;
