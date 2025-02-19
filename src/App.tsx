import { Container, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
// import { useAppSelector } from './hooks/useStore';
// import { useSelector } from 'react-redux';
// import { useAppSelector } from './hooks/useStore';
import Router from './routes/Router';
import Navbar from './ui/Navbar';

function App() {
  // const count = useAppSelector((state) => state.user);
  // console.log(count);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xl">
        <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;
