'use client';
import { IconButton, Stack, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import CartDetail from './CartDetail';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Header = () => {
  const session = useSession();
  const headerElements = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Headphones', path: '/headphones' },
    { id: 3, name: 'Speakers', path: '/speakers' },
    { id: 4, name: 'Earphones', path: '/earphones' }
  ];
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const path = usePathname();
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  const handleCloseDynamicComponents = () => {
    setOpenMenu(false);
    setOpenCart(false);
  };
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
          zIndex: { xs: 20, md: 10 }
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
        {session.status === 'authenticated' && (
          <Link
            href={'/profile'}
            className={` uppercase text-sm hover:text-[#d87d4a] transition-colors duration-300 ease-in-out ${
              path === '/auth/login' ? 'text-[#d87d4a]' : 'text-white'
            }`}
          >
            Profile
          </Link>
        )}
        {session.status === 'unauthenticated' && (
          <Link
            href={'/auth/login'}
            className={` uppercase text-sm hover:text-[#d87d4a] transition-colors duration-300 ease-in-out ${
              path === '/auth/login' ? 'text-[#d87d4a]' : 'text-white'
            }`}
          >
            Login / Register
          </Link>
        )}
      </Stack>
      {openMenu === true && (
        <div
          className='w-full h-full bg-slate-800/50 fixed top-0 right-0 z-10'
          onClick={handleCloseDynamicComponents}
        />
      )}
      {openCart === true && (
        <div
          className='w-full h-full bg-slate-800/50 fixed top-0 right-0 z-10'
          onClick={handleCloseDynamicComponents}
        />
      )}
      <IconButton>
        <ShoppingCartIcon
          sx={{
            color: '#ffffff',
            cursor: 'pointer',
            ':hover': { color: '#d87d4a' }
          }}
          onClick={() => setOpenCart(!openCart)}
        />
        <CartBadge badgeContent={2} color='primary' overlap='circular' />
      </IconButton>

      {openCart && <CartDetail />}
    </Stack>
  );
};

export default Header;
