// import { uid } from 'uid';
import { useAppDispatch, useAppSelector } from './useStore';
import { updateCopy, updateOriginal } from '../store/slices/userSlice';
import { useEffect } from 'react';

export const useAddNewField = () => {
  const users = useAppSelector((state) => state.user.original);
  const dispatch = useAppDispatch();

  const newUserData: any = users.map((user, index) => {
    const { ...rest } = user;
    return {
      ...rest,
      company: 'AppsTec',
      jobTitles: 'Developer ' + index,
    };
  });

  // dispatch(updateOriginal(newUserData));

  useEffect(() => {
    dispatch(updateOriginal(newUserData));
    dispatch(updateCopy());
  }, []);

  return { users };
};
