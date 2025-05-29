import { Button, ButtonGroup, Input, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import Image from 'next/image';

const CartItem = ({
  name,
  price,
  number,
  image,
  isCheckout = false
}: {
  name: string;
  price: number;
  number: number;
  image: string;
  isCheckout?: boolean;
}) => {
  const [productCount, setProductCount] = useState(number);

  return (
    <Stack
      direction={'row'}
      gap={2}
      sx={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'start'
      }}
    >
      <Image
        alt='product thumbnail'
        src={image}
        width={50}
        height={50}
        className='w-auto h-auto rounded-md border border-gray-300'
        priority
      />
      <Stack direction={'column'} justifyContent={'space-between'}>
        <Typography
          variant='body1'
          color='initial'
          fontWeight={600}
          letterSpacing={1}
        >
          {name}
        </Typography>
        <Typography variant='body1' color='initial' sx={{ color: '#979797' }}>
          $ {price}
        </Typography>
      </Stack>
      {isCheckout ? (
        <Typography variant='body1' color='initial'>
          x {number}
        </Typography>
      ) : (
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
            variant='outlined'
            onClick={() => setProductCount(productCount - 1)}
            disabled={productCount === 0}
          >
            <RemoveIcon sx={{ fontSize: 12 }} />
          </Button>
          <Input
            size='small'
            type='number'
            onChange={(e) => setProductCount(parseInt(e.target.value))}
            value={number}
            inputProps={{
              min: 0,
              max: 100,
              style: { textAlign: 'center', fontSize: 12 }
            }}
            sx={{ width: 30, paddingX: 1 }}
          />

          <Button
            variant='outlined'
            onClick={() => setProductCount(productCount + 1)}
            disabled={productCount === 100}
          >
            <AddIcon sx={{ fontSize: 12 }} />
          </Button>
        </ButtonGroup>
      )}
    </Stack>
  );
};

export default CartItem;
