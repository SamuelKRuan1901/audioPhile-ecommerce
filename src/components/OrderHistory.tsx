import { CartContext } from '@/context/CartProvider';
import { Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Image from 'next/image';

const OrderHistory = () => {
  const { bills } = useContext(CartContext);
  const completedBills = bills.filter((bill) => bill.status === 'completed');
  return (
    <Stack
      direction={'column'}
      gap={4}
      width={'100%'}
      border={'1px solid #d87d4a'}
      borderRadius={2}
      padding={2}
    >
      {completedBills.length !== 0 && (
        <>
          {completedBills.map((bill) => (
            <Stack
              direction={'column'}
              key={bill._id}
              width={'100%'}
              border={'1px solid #d87d4a'}
              borderRadius={2}
            >
              <Stack direction={'column'} gap={2}>
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
                  sx={{ padding: 2, fontWeight: 600 }}
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
            </Stack>
          ))}
        </>
      )}
      {completedBills.length === 0 && (
        <Typography variant='body1' sx={{ textAlign: 'center', padding: 2 }}>
          No completed orders
        </Typography>
      )}
    </Stack>
  );
};

export default OrderHistory;
