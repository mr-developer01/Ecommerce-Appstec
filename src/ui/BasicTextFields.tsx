import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, InputLabel } from '@mui/material';
import BasicSelect from './BasicSelect';
import { useAppDispatch } from '../hooks/useStore';
import { filterUsersWithModalData } from '../store/slices/userSlice';
import { toggling } from '../store/slices/toggleSlice';
import { useState } from 'react';

export default function BasicTextFields() {
  const [gender, setGender] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [emailEndsWith, setEmailEndsWith] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        // justifyContent: 'start',
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          gap: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <InputLabel htmlFor="outlined-basic">Min Age</InputLabel>
          <BasicSelect
            label="age"
            options={[18, 30, 45]}
            selected={minAge}
            setSelected={setMinAge}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <InputLabel htmlFor="outlined-basic">Max Age</InputLabel>
          <BasicSelect
            label="age"
            options={[45, 55, 75]}
            selected={maxAge}
            setSelected={setMaxAge}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <InputLabel htmlFor="outlined-basic">Email ending with</InputLabel>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="number"
          value={emailEndsWith}
          onChange={(e) => setEmailEndsWith(e.target.value)}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <InputLabel htmlFor="outlined-basic">Gender</InputLabel>
        <BasicSelect
          label="gender"
          options={['male', 'female', 'others']}
          selected={gender}
          setSelected={setGender}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <InputLabel htmlFor="outlined-basic">Company</InputLabel>
        <BasicSelect
          label="Company"
          options={['AppsTec', 'AppsTec-1', 'AppsTec-2']}
          selected={company}
          setSelected={setCompany}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <InputLabel htmlFor="outlined-basic">Job titles</InputLabel>
        <BasicSelect
          label="Job"
          options={['Developer 0', 'Developer 1', 'Developer 2']}
          selected={jobTitle}
          setSelected={setJobTitle}
        />
      </Box>
      <Button
        variant="outlined"
        onClick={() => {
          console.log(
            gender,
            typeof minAge,
            typeof maxAge,
            emailEndsWith,
            company,
            jobTitle,
          );
          dispatch(
            filterUsersWithModalData({
              minAge: 20,
              maxAge: 70,
              emailEndsWith: '.com',
              company: 'AppsTec',
              jobTitle: 'Developer 5',
            }),
            dispatch(toggling()),
          );
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
