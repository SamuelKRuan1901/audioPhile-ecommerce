'use client';
import CartDetail from '@/components/CartDetail';
import CheckoutForm from '@/components/CheckoutForm';
import Footer from '@/components/Footer';
import GoBackButton from '@/components/GoBackButton';
import PageTitle from '@/components/PageTitle';
import { CartContext } from '@/context/CartProvider';
import { Button, Stack, Typography } from '@mui/material';
import { useContext } from 'react';

const CheckoutPage = () => {
  const { bills } = useContext(CartContext);
  const pendingBills = bills.filter((bill) => bill.status === 'pending');

  return (
    <>
      <time className='hidden' suppressHydrationWarning>
        {new Date().toISOString()}
      </time>
      {pendingBills.length === 0 && (
        <Stack
          direction={'column'}
          sx={{
            width: '100%',
            minHeight: '100vh',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'start'
          }}
        >
          <PageTitle title='Checkout' />
          <GoBackButton />
          <Typography variant='h4'>No pending bills</Typography>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#d87d4a',
              width: 200,
              ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' }
            }}
            href='/'
          >
            Go Shopping
          </Button>
          <Footer />
        </Stack>
      )}
      {pendingBills.length > 0 && (
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
      )}
    </>
  );
};

export default CheckoutPage;
