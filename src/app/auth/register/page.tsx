'use client';
import { FormHelperText, Input, InputLabel, Stack } from '@mui/material';
import { FormControl, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { register } from '@/actions/user';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [confirmPasswordRequired, setConfirmPasswordRequired] = useState(false);
  const [confirmPasswordMatched, setConfirmPasswordMatched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCFPassword, setShowCFPassword] = useState(false);
  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
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
    if (!confirmPassword) {
      setConfirmPasswordRequired(true);
    } else {
      setConfirmPasswordRequired(false);
    }
    if (!email || !password || !confirmPassword) return;
    if (password !== confirmPassword) {
      setConfirmPasswordMatched(true);
      return;
    } else {
      setConfirmPasswordMatched(false);
    }
    try {
      await register(email, password);
      router.push('/auth/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack
      sx={{
        backgroundColor: '#fff',
        height: 'auto',
        width: { xs: '100%', md: 400 },
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        gap: 4
      }}
    >
      <Typography variant='h4' color='#d87d4a' fontWeight={600}>
        Register
      </Typography>
      <form onSubmit={handleRegister} className='w-full flex flex-col gap-6'>
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
          <InputLabel htmlFor='password'>Password</InputLabel>
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
                cursor: 'pointer'
              }}
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <RemoveRedEyeIcon
              sx={{
                position: 'absolute',
                right: 10,
                top: 15,
                cursor: 'pointer'
              }}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
          <FormHelperText id='password' required={passwordRequired} error>
            {passwordRequired ? 'Password is required' : ''}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='confirmPassword'>Confirm Password</InputLabel>
          <Input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            aria-describedby='confirmPassword'
          />
          {showCFPassword ? (
            <VisibilityOffIcon
              sx={{
                position: 'absolute',
                right: 10,
                top: 15,
                cursor: 'pointer',
                ':hover': { color: '#d87d4a' }
              }}
              onClick={() => setShowCFPassword(!showCFPassword)}
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
              onClick={() => setShowCFPassword(!showCFPassword)}
            />
          )}
          <FormHelperText
            id='confirmPassword'
            required={passwordRequired}
            error
          >
            {confirmPasswordRequired ? 'Confirm Password is required' : ''}
            {confirmPasswordMatched ? 'Passwords do not match' : ''}
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
          <span>Register</span>
        </Button>
      </form>
      <Typography variant='body1' color='initial'>
        Already have an account?{' '}
        <Link href='/auth/login' className='text-[#d87d4a] underline'>
          Sign in
        </Link>
      </Typography>
    </Stack>
  );
};

export default RegisterPage;
