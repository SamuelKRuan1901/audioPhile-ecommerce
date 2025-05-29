import { Stack, Typography, Button } from '@mui/material';
import CartItem from './CartItem';
import thumbnail from '@/assets/cart/image-xx59-headphones.jpg';

const CartDetail = () => {
  return (
    <Stack
      sx={{
        backgroundColor: '#ffffff',
        position: 'fixed',
        right: { xs: 0, sm: 20 },
        top: 80,
        width: { xs: '100%', sm: 400 },
        borderRadius: 2,
        padding: 2,
        gap: 2,
        zIndex: 10
      }}
    >
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography
          variant='h5'
          color='initial'
          fontWeight={600}
          letterSpacing={1}
        >
          Cart {`(0)`}
        </Typography>
        <Button
          variant='text'
          color='primary'
          sx={{ fontSize: 12, ':hover': { color: '#d87d4a' } }}
        >
          Remove all
        </Button>
      </Stack>
      <Stack
        direction={'column'}
        justifyContent={'space-between'}
        overflow={'auto'}
        gap={2}
      >
        <CartItem
          name={'product name'}
          price={399}
          number={1}
          image={thumbnail as unknown as string}
        />
        <CartItem
          name={'product name'}
          price={399}
          number={1}
          image={thumbnail as unknown as string}
        />
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'} marginY={2}>
        <Typography
          variant='body1'
          color='#979797'
          textTransform={'uppercase'}
          letterSpacing={1}
        >
          Total
        </Typography>
        <Typography
          variant='body1'
          color='initial'
          fontWeight={600}
          letterSpacing={1}
        >
          $1,698
        </Typography>
      </Stack>
      <Button
        variant='contained'
        sx={{
          fontSize: 12,
          backgroundColor: '#d87d4a',
          ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' }
        }}
        href='/checkout'
      >
        Checkout
      </Button>
    </Stack>
  );
};

export default CartDetail;
