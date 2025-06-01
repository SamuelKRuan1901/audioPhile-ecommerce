'use client';
import CartDetail from '@/components/CartDetail';
import CheckoutForm from '@/components/CheckoutForm';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { Button, Stack, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const Router = useRouter();
  const session = useSession();

  return (
    <>
      <time className='hidden' suppressHydrationWarning>
        {new Date().toISOString()}
      </time>
      {session?.status === 'loading' && (
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
          <Typography variant='h4'>Loading...</Typography>
        </Stack>
      )}
      {session?.status === 'authenticated' && (
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
          <Stack
            sx={{
              width: '100%',
              justifyContent: 'start',
              alignItems: 'start',
              paddingX: { xs: 2, lg: 10, xl: 35 }
            }}
          >
            <Button
              variant='text'
              sx={{
                color: '#000000',
                fontWeight: 400,
                borderRadius: 0,
                ':hover': {
                  color: '#d87d4a',
                  borderBottom: '1px solid #d87d4a',
                  backgroundColor: 'transparent',
                  cursor: 'pointer'
                }
              }}
              onClick={() => Router.back()}
            >
              Go Back
            </Button>
          </Stack>
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            alignItems={'start'}
            justifyContent={'center'}
            gap={8}
            width={'100%'}
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
            <Stack>
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
