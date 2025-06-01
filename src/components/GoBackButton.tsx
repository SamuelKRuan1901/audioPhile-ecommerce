'use client';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

const GoBackButton = () => {
  const Router = useRouter();
  return (
    <Stack
      sx={{
        width: '100%',
        justifyContent: 'start',
        alignItems: 'start',
        paddingX: { xs: 2, lg: 10, xl: 35 }
      }}
    >
      <Button
        variant='text'
        sx={{
          color: '#000000',
          fontWeight: 400,
          borderRadius: 0,
          ':hover': {
            color: '#d87d4a',
            borderBottom: '1px solid #d87d4a',
            backgroundColor: 'transparent',
            cursor: 'pointer'
          }
        }}
        onClick={() => Router.back()}
      >
        Go Back
      </Button>
    </Stack>
  );
};

export default GoBackButton;
