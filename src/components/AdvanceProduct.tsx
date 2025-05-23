import { Stack } from '@mui/material';
import React from 'react';
import ZX9Speaker from './ZX9Speaker';
import ZX7Speaker from './ZX7Speaker';
import YX1Earphones from './YX1Earphones';

const AdvanceProduct = () => {
  return (
    <Stack
      direction={'column'}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        marginTop: 4,
        marginBottom: 12
      }}
      width={'100%'}
    >
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </Stack>
  );
};

export default AdvanceProduct;
