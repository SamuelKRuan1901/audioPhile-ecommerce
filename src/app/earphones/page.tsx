'use client';
import About from '@/components/About';
import FamousProductsList from '@/components/FamousProductsList';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { data } from '@/lib/data';
import { Stack } from '@mui/material';
import ProductItem from '@/components/ProductItem';

const EarphonePage = () => {
  const earphones = data.filter((item) => item.category === 'earphones');
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
      <PageTitle title='Earphones' />
      <Stack direction={'column'} gap={8}>
        {earphones.map((earphone) => (
          <ProductItem
            key={earphone.id}
            id={earphone.id}
            name={earphone.name}
            description={earphone.description}
            isNew={earphone.new}
            href={`/${earphone.slug}`}
            image={earphone.image as unknown as string}
          />
        ))}
      </Stack>
      <FamousProductsList />
      <About />
      <Footer />
    </Stack>
  );
};

export default EarphonePage;
