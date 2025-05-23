import { Stack } from '@mui/material';
import React from 'react';

const PageTitle = ({ title }: { title: string }) => {
  return (
    <Stack
      sx={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
        paddingTop: 20,
        paddingBottom: { xs: 4, md: 8 },
        backgroundColor: '#000000',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: { xs: 24, md: 32 }
      }}
    >
      {title}
    </Stack>
  );
};

export default PageTitle;
