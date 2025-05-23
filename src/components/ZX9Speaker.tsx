import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import SpeakerImage from '@/assets/shared/desktop/image-zx9-speaker.jpg';

const ZX9Speaker = () => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      width={{ xs: '100%', md: 800 }}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1'
      }}
    >
      <Image
        src={SpeakerImage}
        alt={'zx9'}
        priority
        width={400}
        height={400}
        className='w-auto h-auto'
      />
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'start' },
          textAlign: { xs: 'center', md: 'start' },
          width: '100%',
          padding: 4,
          gap: 2
        }}
      >
        <Typography variant='h5' fontWeight={600}>
          ZX9 SPEAKER
        </Typography>
        <Typography variant='body1'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Typography>
        <Button
          variant='contained'
          sx={{
            marginTop: 2,
            width: { xs: 200, md: 200 },
            backgroundColor: '#d87d4a',
            ':hover': { backgroundColor: 'rgba(172, 126, 80, 0.53)' }
          }}
          href='/zx9-speaker'
        >
          See Product
        </Button>
      </Stack>
    </Stack>
  );
};

export default ZX9Speaker;
