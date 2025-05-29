'use client';
import { IconButton, Stack, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const headerElements = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Headphones', path: '/headphones' },
    { id: 3, name: 'Speakers', path: '/speakers' },
    { id: 4, name: 'Earphones', path: '/earphones' }
  ];
  const path = usePathname();
  return (
    <Stack
      direction={'column'}
      sx={{
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        height: 'auto',
        paddingBottom: 4
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        paddingX={{ xs: 2, sm: 4, md: 8 }}
        gap={{ xs: 2, sm: 4, md: 8 }}
      >
        <Typography
          variant='h5'
          component='h1'
          color='#ffffff'
          fontWeight={700}
          sx={{ borderTop: '5px solid #d87d4a', paddingY: 3 }}
        >
          audiophile
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems='center'
          justifyContent='center'
          gap={{ xs: 2, sm: 4, md: 8 }}
        >
          {headerElements.map((item) => (
            <Typography
              key={item.id}
              component='a'
              href={item.path}
              color={item.path === path ? '#d87d4a' : '#ffffff'}
              sx={{
                cursor: 'pointer',
                ':hover': { color: '#d87d4a' },
                textTransform: 'uppercase',
                fontSize: { xs: 12, sm: 12, md: 14 },
                fontWeight: 500,
                transition: 'color 0.3s ease-in-out'
              }}
            >
              {item.name}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems='center'
        paddingX={{ xs: 2, sm: 4, md: 8 }}
        sx={{ paddingY: 2, gap: { xs: 2, sm: 4, md: 8 } }}
      >
        <Typography
          variant='body1'
          component='p'
          color='#ffffff'
          sx={{
            width: { xs: '100%', md: '50%' },
            textAlign: { xs: 'center', md: 'start' },
            color: '#979797'
          }}
        >
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </Typography>
        <Stack direction='row' gap={2}>
          <IconButton aria-label='IG'>
            <InstagramIcon
              sx={{
                color: '#ffffff',
                cursor: 'pointer',
                ':hover': { color: '#d87d4a' },
                transition: 'color 0.3s ease-in-out'
              }}
            />
          </IconButton>
          <IconButton aria-label='TW'>
            <TwitterIcon
              sx={{
                color: '#ffffff',
                cursor: 'pointer',
                ':hover': { color: '#d87d4a' },
                transition: 'color 0.3s ease-in-out'
              }}
            />
          </IconButton>
          <IconButton aria-label='FB'>
            <FacebookIcon
              sx={{
                color: '#ffffff',
                cursor: 'pointer',
                ':hover': { color: '#d87d4a' },
                transition: 'color 0.3s ease-in-out'
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Typography variant='body1' component='p' color='#979797'>
        Copyright 2021. All Rights Reserved
      </Typography>
    </Stack>
  );
};

export default Footer;
