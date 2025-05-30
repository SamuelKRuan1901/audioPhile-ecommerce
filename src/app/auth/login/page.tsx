'use client';
import { FormHelperText, Input, InputLabel, Stack } from '@mui/material';
import { FormControl, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'authenticated') router.push('/');
  });

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    if (!email) {
      setEmailRequired(true);
    } else {
      setEmailRequired(false);
    }
    if (!password) {
      setPasswordRequired(true);
    } else {
      setPasswordRequired(false);
    }
    if (!password || !email) return;
    await signIn('credentials', { email, password });
    if (session.status === 'authenticated') router.push('/');
  };
  return (
    <Stack
      sx={{
        backgroundColor: '#fff',
        height: 'auto',
        width: { xs: '100%', md: 400 },
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        gap: 2
      }}
    >
      <Typography variant='h4' color='#d87d4a' fontWeight={600}>
        Login
      </Typography>
      <form onSubmit={handleLogin} className='w-full flex flex-col gap-5'>
        <FormControl>
          <InputLabel htmlFor='email'>Email address</InputLabel>
          <Input
            id='email'
            name='email'
            type='email'
            aria-describedby='email'
          />
          <FormHelperText id='email' required={emailRequired} error>
            {emailRequired ? 'Email is required' : ''}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='my-input'>Password</InputLabel>
          <Input
            id='password'
            name='password'
            type={showPassword ? 'text' : 'password'}
            aria-describedby='password'
          />
          {showPassword ? (
            <VisibilityOffIcon
              sx={{
                position: 'absolute',
                right: 10,
                top: 15,
                cursor: 'pointer',
                ':hover': { color: '#d87d4a' }
              }}
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <RemoveRedEyeIcon
              sx={{
                position: 'absolute',
                right: 10,
                top: 15,
                cursor: 'pointer',
                ':hover': { color: '#d87d4a' }
              }}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
          <FormHelperText id='password' required={passwordRequired} error>
            {passwordRequired ? 'Password is required' : ''}
          </FormHelperText>
        </FormControl>
        <Button
          variant='contained'
          type='submit'
          sx={{
            backgroundColor: '#d87d4a',
            ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' }
          }}
        >
          <span>Login</span>
        </Button>
      </form>
      <Typography variant='body1' color='initial'>
        Don&apos;t have an account?{' '}
        <Link href='/auth/register' className='text-[#d87d4a] underline'>
          Sign up
        </Link>
      </Typography>
    </Stack>
  );
};

export default LoginPage;
