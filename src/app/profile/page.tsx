'use client';
import BillStatus from '@/components/BillStatus';
import ChangePasswordForm from '@/components/ChangePasswordForm';
import Footer from '@/components/Footer';
import OrderHistory from '@/components/OrderHistory';
import PageTitle from '@/components/PageTitle';
import ProfileForm from '@/components/ProfileForm';
import { Button, Stack, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
  const session = useSession();
  const Router = useRouter();
  const [openBillStatus, setOpenBillStatus] = useState(false);
  const [openOrderHistory, setOpenOrderHistory] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);

  useEffect(() => {
    if (session.status === 'unauthenticated') Router.push('/auth/login');
  }, [session, Router]);

  return (
    <>
      {session.status === 'loading' && (
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
      {session.status === 'authenticated' && (
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
          <PageTitle title='Profile' />
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
            gap={8}
            width={'100%'}
            paddingX={{ xs: 2, lg: 10, xl: 35 }}
          >
            <ProfileForm />
            <Stack
              direction={'column'}
              sx={{
                justifyContent: 'start',
                alignItems: 'center',
                gap: 2,
                width: { xs: '100%', md: '60%' }
              }}
            >
              <Button
                variant='contained'
                sx={{
                  width: '100%',
                  backgroundColor: '#d87d4a',
                  ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' },
                  fontSize: 12,
                  paddingX: 0
                }}
                onClick={() => setOpenBillStatus(!openBillStatus)}
              >
                {openBillStatus ? 'Close Bill Status' : 'Bill Status'}
              </Button>
              {openBillStatus && <BillStatus />}
              <Button
                variant='contained'
                sx={{
                  width: '100%',
                  backgroundColor: '#d87d4a',
                  ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' },
                  fontSize: 12,
                  paddingX: 0
                }}
                onClick={() => setOpenOrderHistory(!openOrderHistory)}
              >
                {openOrderHistory ? 'Close History' : 'Order History'}
              </Button>
              {openOrderHistory && <OrderHistory />}
              <Button
                variant='outlined'
                sx={{
                  width: '100%',
                  color: '#d87d4a',
                  border: '1px solid #d87d4a',
                  ':hover': { backgroundColor: '#d87d4a', color: '#ffffff' },
                  fontSize: 12,
                  paddingX: 0
                }}
                onClick={() => setOpenChangePassword(!openChangePassword)}
              >
                {openChangePassword ? 'Cancel' : 'Change Password'}
              </Button>
              {openChangePassword && <ChangePasswordForm />}
              <hr className='w-full border-[#d87d4a] my-5' />
              <Button
                variant='outlined'
                color='error'
                onClick={() => signOut()}
              >
                Log out
              </Button>
            </Stack>
          </Stack>
          <Footer />
        </Stack>
      )}
    </>
  );
};

export default ProfilePage;
