'use client';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

const Loading = () => {
  return (
    <Stack gap={2} alignItems={'center'} justifyContent={'center'}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Loading...
      </Typography>
    </Stack>
  );
};

export default Loading;
