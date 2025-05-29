'use client';
import About from '@/components/About';
import FamousProductsList from '@/components/FamousProductsList';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { data } from '@/lib/data';
import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import ProductAdvices from '@/components/ProductAdvices';
import Gallery from '@/components/Gallery';
import Recommendations from '@/components/Recommendations';

interface product {
  id: number;
  new: boolean;
  name: string;
  slug: string;
  image: string;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: string;
    second: string;
    third: string;
  };
  others: {
    slug: string;
    name: string;
    image: string;
  }[];
}

const ProductSinglePage = ({ params }: { params: { slug: string } }) => {
  const Router = useRouter();
  const [slug, setSlug] = useState('');
  const [product, setProduct] = useState<product>({} as product);
  console.log(slug);
  useEffect(() => {
    const getSlug = async () => {
      const { slug } = await params;
      setSlug(slug);
      setProduct(
        data.find((product) => product.slug === slug) as unknown as product
      );
    };
    getSlug();
  }, [params, setSlug, setProduct]);

  return (
    <Stack
      direction={'column'}
      sx={{
        width: '100%',
        minHeight: '100vh',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <PageTitle title='' />
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
        direction={'column'}
        sx={{
          width: '100%',
          gap: 14,
          paddingX: { xs: 2, lg: 10, xl: 35 }
        }}
      >
        <ProductDetail
          name={product.name}
          isNew={product.new}
          price={product.price}
          image={product.image}
          description={product.description}
        />
        <ProductAdvices
          features={product.features}
          includes={product.includes}
        />
        <Gallery gallery={product.gallery} />
        <Recommendations othersProducts={product.others} />
      </Stack>
      <FamousProductsList />
      <About />
      <Footer />
    </Stack>
  );
};

export default ProductSinglePage;
