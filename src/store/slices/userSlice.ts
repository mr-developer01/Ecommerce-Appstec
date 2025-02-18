import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../appStore';
import usersData from '../../utils/users.json';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  age: number;
}

// type TPaginationIndex = {
//     start: number,
//     end: number
// }

// type TUsers = IUser[];

type TInitialState = {
  original: IUser[];
  copy: IUser[];
};

const initialState: TInitialState = {
  original: usersData,
  copy: usersData,
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // showPaginatedData: (state, action: PayloadAction<TPaginationIndex>) => {
    //   return state.copy.slice(1, 40)
    // }
  },
});
// export const { showPaginatedData } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.counter.value;
// export const selectCountFname = (state: RootState) => state.counter.fname;

export default userSlice.reducer;
