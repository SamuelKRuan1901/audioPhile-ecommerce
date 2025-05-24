'use client';
import { Button, ButtonGroup, Input, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductDetail = ({
  name,
  isNew,
  image,
  price,
  description
}: {
  name: string;
  isNew: boolean;
  image: string;
  price: number;
  description: string;
}) => {
  const [productCount, setProductCount] = useState(0);
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
      gap={{ xs: 2, md: 8 }}
    >
      {image ? (
        <Image
          src={image}
          alt={name || 'Product image'}
          priority
          width={400}
          height={400}
          className='w-auto h-auto'
        />
      ) : null}
      <Stack direction={'column'} sx={{ width: '100%', gap: 2 }}>
        {isNew && (
          <Typography
            variant='body1'
            sx={{
              color: '#d87d4a',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: 4
            }}
          >
            New Product
          </Typography>
        )}
        <Typography variant='h4' fontWeight={600} textTransform={'uppercase'}>
          {name}
        </Typography>
        <Typography
          variant='h6'
          fontWeight={400}
          color='#979797'
          letterSpacing={1}
        >
          {description}
        </Typography>
        <Typography variant='h6' fontWeight={700}>
          ${price}
        </Typography>
        <Stack direction={'row'} gap={2}>
          <ButtonGroup
            variant='contained'
            color='warning'
            aria-label='Basic button group'
            size='small'
            sx={{
              backgroundColor: 'transparent',
              boxShadow: 'none'
            }}
          >
            <Button
              onClick={() => setProductCount(productCount - 1)}
              disabled={productCount === 0}
            >
              <RemoveIcon />
            </Button>
            <Input
              type='number'
              onChange={(e) => setProductCount(parseInt(e.target.value))}
              value={productCount}
              inputProps={{
                min: 0,
                max: 100,
                style: { textAlign: 'center' }
              }}
              sx={{ width: 50, paddingX: 1 }}
            />

            <Button
              onClick={() => setProductCount(productCount + 1)}
              disabled={productCount === 100}
            >
              <AddIcon />
            </Button>
          </ButtonGroup>
          <Button
            variant='contained'
            sx={{
              width: 200,
              backgroundColor: '#d87d4a',
              ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' }
            }}
          >
            Add To Cart
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductDetail;
