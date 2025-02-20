import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../appStore';

export interface CounterState {
  toggleModal: boolean;
}

const initialState: CounterState = {
  toggleModal: false,
};

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggling: (state) => {
      state.toggleModal = !state.toggleModal;
    },
  },
});

export const { toggling } = toggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectToggle = (state: RootState) => state.toggle.toggleModal;

export default toggleSlice.reducer;
