import { Container, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
import Router from './routes/Router';
import Navbar from './ui/Navbar';
import { useAddNewField } from './hooks/useAddNewField';

function App() {
  useAddNewField();

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
