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

  updateCopyForPagination: (state: any, action: any) => {
    console.log(action);
    return {
      ...state,
      copy: action.payload,
    };
  },
};

export default base;
