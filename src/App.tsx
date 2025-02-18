import { ThemeProvider } from 'styled-components';
import { CssBaseline, Typography } from '@mui/material';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h1">Hello</Typography>
    </ThemeProvider>
  );
}

export default App;
