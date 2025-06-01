'use client';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import EarphonesImg from '@/assets/product-yx1-earphones/desktop/image-gallery-2.jpg';

const YX1Earphones = () => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      width={{ xs: '100%', md: '90%', lg: '80%' }}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf3f0',
        gap: { xs: 4, md: 8 }
      }}
    >
      <Image
        src={EarphonesImg}
        alt={'zx9'}
        priority
        width={400}
        height={400}
        className='w-auto h-64'
      />
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: 4
        }}
      >
        <Typography variant='h5' fontWeight={600}>
          YX1 Earphones
        </Typography>
        <Button
          variant='outlined'
          sx={{
            marginTop: 2,
            width: { xs: 200, md: 200 },
            border: '1px solid #d87d4a',
            color: '#d87d4a',
            ':hover': { backgroundColor: '#d87d4a', color: '#ffffff' }
          }}
          href={'/yx1-earphones'}
        >
          See Product
        </Button>
      </Stack>
    </Stack>
  );
};

export default YX1Earphones;
