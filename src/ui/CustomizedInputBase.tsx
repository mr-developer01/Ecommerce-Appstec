import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { useAppDispatch } from '../hooks/useStore';
import { searchedUsers } from '../store/slices/userSlice';
import { useEffect, useState } from 'react';

// type TToggleModal = {
//   setOpen: (bool: boolean) => boolean;
// };

// type TToggleModalPrev = (prev: boolean) => boolean;

export default function CustomizedInputBase({ setOpen }: any) {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState('');
  console.log(searchText.trim().toLocaleLowerCase().replace(/\s+/g, ''));

  useEffect(() => {
    console.log('Check-1');
    dispatch(
      searchedUsers(searchText.trim().toLocaleLowerCase().replace(/\s+/g, '')),
    );
    console.log('Check-2');
  }, [searchText, dispatch]);

  return (
    <Paper
      component="form"
      sx={{ p: '.5px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search User by name..."
        inputProps={{ 'aria-label': 'search google maps' }}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          // dispatch(searchedUsers(searchText));
        }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        color="primary"
        sx={{ p: '10px' }}
        aria-label="directions"
        onClick={() => setOpen((prev: any) => !prev)}
      >
        <TuneIcon />
      </IconButton>
    </Paper>
  );
}
