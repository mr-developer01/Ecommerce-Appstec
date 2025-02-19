import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type TUser = {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  email: string;
  phone: string;
};

export default function OutlinedCard({
  firstName,
  lastName,
  age,
  address,
  email,
  phone,
}: TUser) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: 'text.secondary', fontSize: 14 }}
          >
            {firstName} {lastName}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{age}</Typography>
          <Typography variant="h5" component="div">
            {address}
          </Typography>
          <Typography variant="h5" component="div">
            {phone}
          </Typography>
          <Typography variant="body2">
            {email}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
