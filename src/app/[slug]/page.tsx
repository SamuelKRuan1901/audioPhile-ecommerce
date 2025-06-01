import About from '@/components/About';
import FamousProductsList from '@/components/FamousProductsList';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { data } from '@/lib/data';
import { Stack, Typography } from '@mui/material';
import ProductDetail from '@/components/ProductDetail';
import ProductAdvices from '@/components/ProductAdvices';
import Gallery from '@/components/Gallery';
import Recommendations from '@/components/Recommendations';
import GoBackButton from '@/components/GoBackButton';

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

interface Params {
  slug: string;
}

const ProductSinglePage = async ({ params }: { params: Promise<Params> }) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const product = data.find(
    (product) => product.slug === slug
  ) as unknown as product;

  return (
    <>
      <time className='hidden' suppressHydrationWarning>
        {new Date().toISOString()}
      </time>
      {!product && (
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
          <Typography variant='h4'>Loading...</Typography>
        </Stack>
      )}
      {product !== undefined && (
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
          <GoBackButton />
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
              slug={slug}
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
      )}
    </>
  );
};

export default ProductSinglePage;
