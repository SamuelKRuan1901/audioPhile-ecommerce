import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import AboutImg from '@/assets/shared/desktop/image-best-gear.jpg';

const About = () => {
  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      width={{ xs: '100%', md: '80%' }}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        gap: 4,
        marginTop: 4,
        marginBottom: 12,
        paddingX: 2,
        borderRadius: 2
      }}
    >
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '100%', md: '40%' },
          padding: 4,
          textAlign: { xs: 'center', md: 'start' }
        }}
      >
        <Typography variant='h3' fontWeight={600} fontSize={42}>
          Bringing you the <span style={{ color: '#d87d4a' }}>best</span> audio
          gear
        </Typography>
        <Typography
          variant='body1'
          sx={{
            marginTop: 2,
            fontSize: 16,
            color: '#979797',
            letterSpacing: 1
          }}
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Typography>
      </Stack>
      <Image
        src={AboutImg}
        alt={'about image'}
        priority
        width={600}
        height={600}
      />
    </Stack>
  );
};

export default About;
