import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../appStore';
import usersData from '../../utils/users.json';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  age: number;
  company?: string;
  jobTitles?: string;
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
    updateOriginal: (_state, action) => {
      return {
        original: action.payload,
        copy: usersData,
      };
    },

    updateCopy: (state) => {
      return {
        ...state,
        copy: state.original,
      };
    },

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

    filterUsersWithModalData: (state, action) => {
      const filteredData = state.original.filter((user) => {
        return (
          user.age >= action.payload.minAge &&
          user.age <= action.payload.maxAge &&
          user.email.endsWith(action.payload.emailEndsWith) &&
          user.company === action.payload.company &&
          user.jobTitles === action.payload.jobTitle
        );
      });

      return {
        ...state,
        copy: filteredData,
      };
    },
  },
});

// action: PayloadAction<TPaginationIndex>
export const {
  updateOriginal,
  updateCopy,
  searchedUsers,
  filterUsersWithModalData,
} = userSlice.actions;

// export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
