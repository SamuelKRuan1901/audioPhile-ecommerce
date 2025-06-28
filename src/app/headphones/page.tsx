'use client';
import About from '@/components/About';
import FamousProductsList from '@/components/FamousProductsList';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { Stack } from '@mui/material';
import { data } from '@/lib/data';
import dynamic from 'next/dynamic';

const HeadphonesPage = () => {
  const headphones = data.filter((item) => item.category === 'headphones');
  const ProductItem = dynamic(() => import('@/components/ProductItem'), {
    ssr: false,
    loading: () => <p>Loading...</p>
  });
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
      <PageTitle title='Headphones' />
      <Stack direction={'column'} gap={8}>
        {headphones.reverse().map((headphone) => (
          <ProductItem
            key={headphone.id}
            id={headphone.id}
            name={headphone.name}
            description={headphone.description}
            isNew={headphone.new}
            href={`/${headphone.slug}`}
            image={headphone.image as unknown as string}
          />
        ))}
      </Stack>
      <FamousProductsList />
      <About />
      <Footer />
    </Stack>
  );
};

export default HeadphonesPage;
