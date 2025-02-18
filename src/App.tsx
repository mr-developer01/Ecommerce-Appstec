import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
// import { useSelector } from 'react-redux';
import { useAppSelector } from './hooks/useStore';
import Router from './routes/Router';
import Navbar from './ui/Navbar';
// import data from './utils/users.json';

function App() {
  const count = useAppSelector((state) => state.user);
  console.log(count);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Router />
    </ThemeProvider>
  );
}

export default App;
