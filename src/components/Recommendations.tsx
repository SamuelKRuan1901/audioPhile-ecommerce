import { Stack } from '@mui/material';
import React from 'react';
import OtherProductItem from './OtherProductItem';

const Recommendations = ({
  othersProducts
}: {
  othersProducts: {
    slug: string;
    name: string;
    image: string;
  }[];
}) => {
  console.group('othersProducts', othersProducts);
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 12, md: 8 }
      }}
    >
      {othersProducts?.map((product) => (
        <OtherProductItem
          slug={product.slug}
          name={product.name}
          image={product.image}
          key={product.slug}
        />
      ))}
    </Stack>
  );
};

export default Recommendations;
