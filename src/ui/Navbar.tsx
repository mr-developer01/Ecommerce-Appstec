import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomizedInputBase from './CustomizedInputBase';
import FilterModel from '../components/features/FilterModel';
// import { Link } from 'react-router';
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FilterModel />
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
          >
            <a href="/">Ecom</a>
          </Typography>
          <CustomizedInputBase />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
