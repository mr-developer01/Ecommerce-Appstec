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
  // console.log(users)
  const maxOutput = users.slice(skip * 20, skip * 20 + 20);
  // console.log(maxOutput);

  // const handleScroll = (e) => {
  //   console.log("Scrolling...")
  //   if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
  //     setSkip((prev) => prev + 10);
  //   }
  // };

  return { maxOutput, setSkip };
};
