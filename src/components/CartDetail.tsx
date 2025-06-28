'use client';
import { Stack, Typography, Button } from '@mui/material';
import CartItem from './CartItem';
import { useContext } from 'react';
import { CartContext } from '@/context/CartProvider';
import { ShopContext } from '@/context/ShopProvider';
import { BillType } from '@/lib/type';

const CartDetail = ({
  isCheckoutPage = false
}: {
  isCheckoutPage?: boolean;
}) => {
  const { bills, clearCart, isLoading, handleCompleteOrder } =
    useContext(CartContext);
  const { userInfo } = useContext(ShopContext);
  const pendingBill = bills.find((bill: BillType) => bill.status === 'pending');
  const total = pendingBill?.products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Stack
      position={isCheckoutPage ? 'static' : 'fixed'}
      border={!isCheckoutPage ? 'none' : '1px solid #d87d4a'}
      zIndex={isCheckoutPage ? 0 : 50}
      sx={{
        backgroundColor: '#ffffff',
        right: { xs: 0, sm: 20 },
        top: 20,
        width: { xs: '100%', sm: 400 },
        borderRadius: 2,
        padding: 2,
        gap: 2
      }}
    >
      <Stack direction={'row'} justifyContent={'space-between'}>
        {isCheckoutPage === true && (
          <Typography
            variant='h5'
            color='initial'
            fontWeight={600}
            letterSpacing={1}
          >
            Summary
          </Typography>
        )}
        {isCheckoutPage === false && (
          <Typography
            variant='h5'
            color='initial'
            fontWeight={600}
            letterSpacing={1}
          >
            Cart{' '}
            {`(${pendingBill?.products ? pendingBill?.products.length : 0})`}
          </Typography>
        )}

        {pendingBill && !isCheckoutPage && (
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
            isCheckout={isCheckoutPage}
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
      {pendingBill && !isCheckoutPage && (
        <Button
          variant='contained'
          sx={{
            fontSize: 12,
            backgroundColor: '#d87d4a',
            ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' }
          }}
          href='/checkout'
          disabled={pendingBill ? false : true || isLoading}
        >
          Checkout
        </Button>
      )}
      {pendingBill && isCheckoutPage && (
        <Stack gap={2}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography
              variant='body1'
              color='#979797'
              textTransform={'uppercase'}
              letterSpacing={1}
            >
              Shipping
            </Typography>
            <Typography
              variant='body1'
              color='initial'
              fontWeight={600}
              letterSpacing={1}
            >
              $50
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography
              variant='body1'
              color='#979797'
              textTransform={'uppercase'}
              letterSpacing={1}
            >
              Grand Total
            </Typography>
            <Typography
              variant='body1'
              color='initial'
              fontWeight={600}
              letterSpacing={1}
            >
              ${(total as number) + 50}
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography
              variant='body1'
              color='#979797'
              textTransform={'uppercase'}
              letterSpacing={1}
              fontSize={{ xs: 12, md: 14 }}
            >
              Payment Method
            </Typography>
            <Typography
              variant='body1'
              color='initial'
              fontWeight={600}
              letterSpacing={1}
              fontSize={{ xs: 12, md: 14 }}
            >
              {pendingBill.paymentMethod}
            </Typography>
          </Stack>
          <Button
            variant='contained'
            sx={{
              fontSize: 12,
              backgroundColor: '#d87d4a',
              ':hover': { backgroundColor: '#f1f1f1', color: '#d87d4a' }
            }}
            disabled={pendingBill ? false : true}
            onClick={() =>
              handleCompleteOrder(
                userInfo._id as string,
                pendingBill._id as string
              )
            }
          >
            Continue and pay
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default CartDetail;
