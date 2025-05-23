'use client';

import About from '@/components/About';
import FamousProductsList from '@/components/FamousProductsList';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';

const ProductSinglePage = ({ params }: { params: { slug: string } }) => {
  const [slug, setSlug] = useState('');
  useEffect(() => {
    const getSlug = async () => {
      const { slug } = await params;
      setSlug(slug);
    };
    getSlug();
  }, [params, setSlug]);
  console.log(slug);

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
      <PageTitle title='' />
      <FamousProductsList />
      <About />
      <Footer />
    </Stack>
  );
};

export default ProductSinglePage;
