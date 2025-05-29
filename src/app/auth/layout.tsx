import { Stack } from '@mui/material';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack
      sx={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        paddingTop: 14
      }}
    >
      {children}
    </Stack>
  );
};

export default AuthLayout;
