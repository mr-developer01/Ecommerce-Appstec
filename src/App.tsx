import { ThemeProvider } from '@mui/material';
import { CssBaseline, Typography } from '@mui/material';
import theme from './theme/theme';
// import { useSelector } from 'react-redux';
import { useAppSelector } from './hooks/useStore';
// import data from './utils/users.json';

function App() {
  const count = useAppSelector((state) => state.user);
  console.log(count);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h1">Rahul</Typography>
      <Typography variant="h4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        consectetur consequuntur non repellat, dolorum sunt. Reprehenderit,
        praesentium! Perferendis, delectus aperiam qui praesentium earum
        recusandae laborum dolor, corporis quod accusamus aliquam neque.
        Aspernatur quo, voluptates doloribus necessitatibus nihil optio sit
        doloremque laudantium soluta expedita. Dicta voluptates sapiente optio,
        sunt non atque voluptas sit impedit odio nostrum rem nobis officiis
        totam! Eum aspernatur a illum quibusdam? Voluptatibus assumenda
        consectetur quae quod eum nobis modi ipsum vel ea earum, sint
        dignissimos eveniet sapiente quibusdam aliquid placeat voluptatem vero
        amet voluptate officiis. Expedita laudantium nihil ea praesentium maxime
        consequatur, voluptas vel eaque ratione dicta?
      </Typography>
    </ThemeProvider>
  );
}

export default App;
