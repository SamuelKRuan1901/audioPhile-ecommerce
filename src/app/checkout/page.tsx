'use client';
import Footer from '@/components/Footer';
import GoBackButton from '@/components/GoBackButton';
import PageTitle from '@/components/PageTitle';
import { Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';

const CheckoutPage = () => {
  const CartDetail = dynamic(() => import('@/components/CartDetail'), {
    ssr: false,
    loading: () => <p>Loading...</p>
  });
  const CheckoutForm = dynamic(() => import('@/components/CheckoutForm'), {
    ssr: false,
    loading: () => <p>Loading...</p>
  });

  return (
    <Stack
      direction={'column'}
      sx={{
        width: '100%',
        minHeight: '100vh',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <PageTitle title='Checkout' />
      <GoBackButton />
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        alignItems={{ xs: 'center', md: 'start' }}
        justifyContent={'center'}
        gap={8}
        width={'100%'}
        padding={4}
      >
        <Stack sx={{ width: { xs: '100%', md: '50%' } }} gap={4}>
          <Typography
            variant='body1'
            sx={{ fontWeight: 600, color: '#d87d4a' }}
          >
            Bill Details
          </Typography>
          <CheckoutForm />
        </Stack>
        <Stack sx={{ width: { xs: '100%', md: '50%' } }}>
          <CartDetail isCheckoutPage={true} />
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default CheckoutPage;
