'use client';
import CheckoutForm from '@/components/CheckoutForm';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const Router = useRouter();
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
      <Stack direction={{ xs: 'column-reverse', md: 'row' }} gap={8}>
        <CheckoutForm />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default CheckoutPage;
