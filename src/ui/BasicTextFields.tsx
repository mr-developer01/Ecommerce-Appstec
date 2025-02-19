// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';

export default function BasicTextFields() {
  return (
    <Box component="form" sx={{}} noValidate autoComplete="off">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <InputLabel htmlFor="outlined-basic">Email address</InputLabel>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="number"
          sx={{ width: '4rem', py: '.4rem' }}
        />
      </Box>
    </Box>
  );
}
