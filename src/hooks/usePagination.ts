import { useEffect } from 'react';
import { updateCopyForPagination } from '../store/slices/userSlice';
import { useAppDispatch } from './useStore';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  age: number;
  company?: string;
  jobTitle?: string;
}
type TUsers = IUser[];

export const usePagination = (
  users: TUsers,
  skip: number,
  toggleModal: boolean,
) => {
  const dispatch = useAppDispatch();
  const maxOutput: any = users.slice(skip * 20, skip * 20 + 20);

  useEffect(() => {
    dispatch(updateCopyForPagination(maxOutput));
  }, [toggleModal]);
};
