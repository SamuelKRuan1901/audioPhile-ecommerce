'use client';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import desBgImg from '@/assets/home/desktop/image-hero.jpg';
import tabletBgImg from '@/assets/home/tablet/image-header.jpg';
import mobBgImg from '@/assets/home/mobile/image-header.jpg';
const Hero = () => {
  return (
    <Stack
      sx={{
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: 'transparent'
      }}
    >
      <Stack sx={{ position: 'relative', width: '100%' }}>
        <Image
          src={desBgImg}
          priority
          width={1440}
          height={600}
          alt='hero'
          className='hidden min-[1000px]:block w-screen h-auto'
        />
        <Image
          src={tabletBgImg}
          priority
          width={768}
          height={600}
          alt='hero'
          className='max-[640px]:hidden min-[1000px]:hidden w-screen h-auto'
        />
        <Image
          src={mobBgImg}
          priority
          width={375}
          height={600}
          alt='hero'
          className='min-[640px]:hidden w-screen h-auto'
        />
      </Stack>
      <Stack
        sx={{
          position: 'absolute',
          top: { xs: '30%', md: '20%' },
          left: { xs: '0', md: '10%' },
          right: { xs: '0', md: '10%' },
          bottom: { xs: '0', md: '10%' },
          width: { xs: '100%', md: '30%' },
          height: { xs: '100%', md: '100%', lg: 'auto' },
          paddingX: { xs: 2, md: 4, lg: 8 },
          paddingY: { xs: 2, md: 4, lg: 8 },
          backgroundColor: 'transparent',
          textAlign: { xs: 'center', md: 'start' },
          alignItems: { xs: 'center', md: 'start' },
          justifyContent: 'start'
        }}
      >
        <Typography
          variant='body1'
          sx={{
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            fontSize: { xs: 12, md: 14 }
          }}
        >
          NEW PRODUCT
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: '#ffffff',
            fontWeight: 700,
            letterSpacing: '2px',
            fontSize: { xs: 24, md: 42 }
          }}
        >
          XX99 MARK II HEADPHONES
        </Typography>
        <Typography
          variant='body1'
          sx={{
            color: '#ffffff',
            marginTop: 2,
            fontSize: { xs: 14, md: 16 }
          }}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Typography>
        <Button
          sx={{
            marginTop: 2,
            backgroundColor: '#d87d4a',
            ':hover': { backgroundColor: 'hsla(0, 0%, 100%, 0.75)' },
            color: '#ffffff',
            width: 200
          }}
          href='/xx99-mark-one-headphones'
        >
          SEE PRODUCT
        </Button>
      </Stack>
    </Stack>
  );
};

export default Hero;
