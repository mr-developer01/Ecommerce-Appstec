import userData from '../utils/users.json';

export const usePagination = () => {
  const maxOutput = userData.slice(0, 10);

  return { maxOutput, userData };
};
