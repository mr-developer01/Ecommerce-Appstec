interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  age: number;
}
type TUsers = IUser[];

type TSetSkip = (skip: number) => void;

export const usePagination = (
  users: TUsers,
  skip: number,
  setSkip: TSetSkip,
) => {
  const maxOutput = users.slice(skip * 20, skip * 20 + 20);

  return { maxOutput, setSkip };
};
