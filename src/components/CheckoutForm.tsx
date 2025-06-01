import { Stack } from '@mui/material';
import React from 'react';
import ProfileForm from './ProfileForm';

const CheckoutForm = () => {
  return (
    <Stack direction={'column'} gap={4} width={'100%'}>
      <ProfileForm />
    </Stack>
  );
};

export default CheckoutForm;
