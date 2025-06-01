'use client';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import SpeakerImage from '@/assets/shared/desktop/image-zx7-speaker.jpg';

const ZX7Speaker = () => {
  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      width={{ xs: '100%', md: '90%', lg: '80%' }}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf3f0',
        px: { xs: 2, md: 4 },
        gap: { xs: 0, md: 8 }
      }}
    >
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 300,
          padding: 4
        }}
      >
        <Typography variant='h5' fontWeight={600}>
          ZX7 SPEAKER
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
          href='/zx7-speaker'
        >
          See Product
        </Button>
      </Stack>
      <Image
        src={SpeakerImage}
        alt={'zx9'}
        priority
        width={400}
        height={400}
        className='w-auto h-auto'
      />
    </Stack>
  );
};

export default ZX7Speaker;
