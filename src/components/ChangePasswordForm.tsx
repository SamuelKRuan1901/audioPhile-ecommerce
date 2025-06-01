'use client';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import { ChangePassword } from '@/actions/user';
import Typography from '@mui/material/Typography';

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [cFPassword, setCFPassword] = useState('');
  const session = useSession();

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword !== cFPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (currentPassword === newPassword) {
      toast.error('New password cannot be same as current password');
      return;
    }
    const formData = new FormData(e.currentTarget);
    formData.append('email', session.data?.user?.email as string);
    formData.append('currentPassword', currentPassword);
    formData.append('newPassword', newPassword);
    const res = await ChangePassword(formData);
    if (res.status === 200) toast.success(res.message);
    else toast.error(res.message);
  };

  return (
    <form
      className='w-full flex flex-col gap-2 border border-[#d87d4a] p-4 rounded-md'
      onSubmit={handleChangePassword}
    >
      <Typography
        variant='body1'
        sx={{
          fontWeight: 600,
          marginY: 2,
          fontSize: { xs: 16, md: 20 },
          textAlign: 'center',
          color: '#d87d4a'
        }}
      >
        Change Your Password
      </Typography>
      <TextField
        required
        id='current-password'
        label='Current Password'
        type='password'
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        margin='normal'
        fullWidth
      />
      <TextField
        required
        id='new-password'
        label='New Password'
        type='password'
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        margin='normal'
        fullWidth
      />
      <TextField
        required
        id='confirm-password'
        label='Confirm Password'
        type='password'
        value={cFPassword}
        onChange={(e) => setCFPassword(e.target.value)}
        margin='normal'
        fullWidth
      />
      <Button
        variant='contained'
        sx={{
          width: '100%',
          backgroundColor: '#d87d4a',
          ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' }
        }}
        type='submit'
      >
        Change Password
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
