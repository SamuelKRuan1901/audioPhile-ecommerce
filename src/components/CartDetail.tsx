'use client';
import { Stack, Typography, Button } from '@mui/material';
import CartItem from './CartItem';
import { useEffect, useContext } from 'react';
import { CartContext } from '@/context/CartProvider';
import { ShopContext } from '@/context/ShopProvider';
import { BillType } from '@/lib/type';

const CartDetail = () => {
  const { getBillsInfo, bills, clearCart } = useContext(CartContext);
  const { userInfo } = useContext(ShopContext);
  const pendingBill = bills.find((bill: BillType) => bill.status === 'pending');
  const total = pendingBill?.products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (userInfo._id) getBillsInfo(userInfo._id as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo._id]);

  return (
    <Stack
      sx={{
        backgroundColor: '#ffffff',
        position: 'fixed',
        right: { xs: 0, sm: 20 },
        top: 20,
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
          Cart {`(${pendingBill?.products ? pendingBill?.products.length : 0})`}
        </Typography>
        {pendingBill?.products.length !== 0 && (
          <Button
            variant='text'
            color='primary'
            sx={{ fontSize: 12, ':hover': { color: '#d87d4a' } }}
            onClick={() => clearCart(userInfo._id as string)}
          >
            Remove all
          </Button>
        )}
      </Stack>
      <Stack
        direction={'column'}
        justifyContent={'space-between'}
        overflow={'auto'}
      >
        {pendingBill?.products.map((product) => (
          <CartItem
            key={product._id}
            userId={userInfo._id as string}
            id={product._id}
            slug={product.slug}
            name={product.name}
            price={product.price}
            number={product.quantity}
            image={product.image}
          />
        ))}
      </Stack>
      <Stack direction={'row'} justifyContent={'space-between'}>
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
          ${total}
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
