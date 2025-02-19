import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
//   start: number;
//   end: number;
// };

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
    searchedUsers: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        return { ...state, copy: state.original };
      }

      return {
        ...state,
        copy: state.original.filter((user) => {
          const fullName = (user.firstName + user.lastName)
            .trim()
            .toLocaleLowerCase();
          return fullName.includes(action.payload);
        }),
      };
    },
  },
});

// action: PayloadAction<TPaginationIndex>
export const { searchedUsers } = userSlice.actions;

export const selectUser = (state: RootState) => state.counter.value;

export default userSlice.reducer;
