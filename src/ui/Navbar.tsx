import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomizedInputBase from './CustomizedInputBase';
import FilterModel from '../components/features/FilterModel';

export default function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FilterModel open={open} setOpen={setOpen} />
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
          >
            Ecom
          </Typography>
          <CustomizedInputBase setOpen={setOpen} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
