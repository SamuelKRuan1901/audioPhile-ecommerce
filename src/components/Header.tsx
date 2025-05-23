'use client';
import { Stack, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Header = () => {
  const headerElements = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Headphones', path: '/headphones' },
    { id: 3, name: 'Speakers', path: '/speakers' },
    { id: 4, name: 'Earphones', path: '/earphones' }
  ];
  const [openMenu, setOpenMenu] = useState(false);
  const path = usePathname();
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      width='100%'
      height={100}
      paddingX={{ xs: 2, sm: 4, md: 8 }}
      sx={{
        paddingY: 2,
        backgroundColor: 'transparent',
        borderBottom: '1px solid #d87d4a',
        position: 'absolute',
        zIndex: 10
      }}
    >
      <MenuIcon
        sx={{
          color: '#ffffff',
          cursor: 'pointer',
          display: { xs: 'block', md: 'none' },
          ':hover': { color: '#d87d4a' }
        }}
        onClick={() => setOpenMenu(true)}
      />
      <Typography variant='h5' component='h1' color='#ffffff' fontWeight={700}>
        audiophile
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        gap={{ xs: 2, sm: 4, md: 8 }}
        sx={{
          position: { xs: 'fixed', md: 'static' },
          width: { xs: 200, md: 'auto' },
          height: { xs: '100vh', md: 'auto' },
          top: { xs: '0', md: 'auto' },
          left: { xs: openMenu ? 0 : '-100%', md: 'auto' },
          backgroundColor: { xs: '#000000', md: 'transparent' },
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'start', md: 'center' },
          justifyContent: 'center',
          padding: { xs: 4, md: 0 },
          transition: 'left 0.3s ease-in-out',
          zIndex: 10
        }}
      >
        {openMenu && (
          <CloseIcon
            sx={{
              color: '#ffffff',
              position: 'absolute',
              top: 20,
              right: 20,
              cursor: 'pointer',
              ':hover': { color: '#d87d4a' }
            }}
            onClick={() => setOpenMenu(false)}
          />
        )}
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
      {openMenu && (
        <div
          className='w-full h-full bg-slate-800/50 fixed top-0 right-0 z-0'
          onClick={() => setOpenMenu(false)}
        />
      )}
      <ShoppingCartIcon
        sx={{
          color: '#ffffff',
          cursor: 'pointer',
          ':hover': { color: '#d87d4a' }
        }}
      />
    </Stack>
  );
};

export default Header;
