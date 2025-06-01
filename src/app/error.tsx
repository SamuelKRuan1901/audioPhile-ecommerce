'use client';
import { Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const Error = () => {
  return (
    <Stack
      direction={'column'}
      gap={2}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Error
      </Typography>
      <Button variant='text' color='primary' href='/'>
        Back To Home page
      </Button>
    </Stack>
  );
};

export default Error;
