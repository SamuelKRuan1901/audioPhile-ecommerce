'use client';
import { Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const OtherProductItem = ({
  slug,
  name,
  image
}: {
  slug: string;
  name: string;
  image: string;
}) => {
  return (
    <Stack direction={'column'} gap={5} sx={{ alignItems: 'center' }}>
      <Image
        src={image}
        alt={name}
        priority
        width={300}
        height={300}
        className='w-full h-auto'
      />
      <Typography variant='h4' color='initial'>
        {name}
      </Typography>
      <Button
        variant='contained'
        sx={{
          width: 200,
          backgroundColor: '#d87d4a',
          ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' }
        }}
        href={`/${slug}`}
      >
        See Product
      </Button>
    </Stack>
  );
};

export default OtherProductItem;
