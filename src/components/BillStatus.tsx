import { CartContext } from '@/context/CartProvider';
import { Stack, Typography, Button } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react';

const BillStatus = () => {
  const { bills, handleCancelOrder, handleReceivedOrder } =
    useContext(CartContext);
  const solvingBills = bills.filter((bill) => bill.status !== 'completed');
  return (
    <Stack
      direction={'column'}
      gap={4}
      width={'100%'}
      border={'1px solid #d87d4a'}
      borderRadius={2}
      padding={2}
    >
      {solvingBills.length !== 0 && (
        <>
          {solvingBills.map((bill) => (
            <Stack
              key={bill._id}
              width={'100%'}
              border={'1px solid #d87d4a'}
              borderRadius={2}
            >
              <Stack direction={'column'}>
                {bill.products.map((product) => (
                  <Stack
                    key={product._id}
                    direction={'row'}
                    sx={{
                      gap: 2,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: 2
                    }}
                  >
                    <Image
                      src={product.image as string}
                      alt={'productImage'}
                      priority
                      width={40}
                      height={40}
                    />
                    <Typography variant='body1'>{product.name}</Typography>
                    <Typography variant='body1'>x{product.quantity}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Stack direction={'row'}>
                <Typography
                  variant='body1'
                  sx={{ padding: 2, color: '#d87d4a' }}
                >
                  Status
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ padding: 2, fontWeight: 600 }}
                >
                  {bill.status}
                </Typography>
              </Stack>
              {bill.status === 'confirmed' && (
                <>
                  <Typography
                    variant='body1'
                    color='error'
                    textAlign={'center'}
                    fontSize={12}
                  >
                    you may cancel the order in the next 24 hours
                  </Typography>
                  <Button
                    variant='text'
                    color='primary'
                    onClick={() => handleCancelOrder(bill._id)}
                  >
                    Cancel order
                  </Button>
                </>
              )}
              {bill.status === 'delivered' && (
                <Button
                  variant='text'
                  color='primary'
                  onClick={() => handleReceivedOrder(bill._id)}
                >
                  Received
                </Button>
              )}
            </Stack>
          ))}
        </>
      )}
      {solvingBills.length === 0 && (
        <Typography variant='body1' sx={{ textAlign: 'center', padding: 2 }}>
          No orders in progress
        </Typography>
      )}
    </Stack>
  );
};

export default BillStatus;
