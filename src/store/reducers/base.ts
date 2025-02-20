import usersData from '../../utils/users.json';
const base = {
  updateOriginal: (_state: any, action: any): any => {
    return {
      original: action.payload,
      copy: usersData,
    };
  },

  updateCopy: (state: any) => {
    return {
      ...state,
      copy: state.original,
    };
  },
};

export default base;
