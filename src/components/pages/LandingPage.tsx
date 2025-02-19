import OutlinedCard from '../../ui/OutlinedCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useAppSelector } from '../../hooks/useStore';
// import { usePagination } from '../../hooks/usePagination';
// import { useState } from 'react';

const LandingPage = () => {
  const { copy } = useAppSelector((state) => state.user);
  // const [skip, setSkip] = useState<number>(1);

  // const { maxOutput } = usePagination(copy, skip, setSkip);
  // console.log(maxOutput)
  return (
    <Box mt={3} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {copy.map((user, index) => (
          <Grid key={index} size={{ lg: 3 }}>
            <OutlinedCard
              firstName={user.firstName}
              lastName={user.lastName}
              address={user.address}
              age={user.age}
              email={user.email}
              phone={user.phone}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LandingPage;
