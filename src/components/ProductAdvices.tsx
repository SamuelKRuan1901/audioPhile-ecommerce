'use client';
import { Stack, Typography } from '@mui/material';

const ProductAdvices = ({
  features,
  includes
}: {
  features: string;
  includes: { quantity: number; item: string }[];
}) => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 8 }}>
      <Stack
        direction={'column'}
        sx={{ width: { xs: '100%', md: '60%' }, gap: 7 }}
      >
        <Typography
          variant='h4'
          fontWeight={600}
          sx={{ marginTop: 2 }}
          textTransform={'uppercase'}
        >
          Features
        </Typography>
        <Typography variant='body1' sx={{ color: '#979797', letterSpacing: 1 }}>
          {features?.split('\n').map((feature, index) => (
            <span key={index}>
              {feature}
              <br />
            </span>
          ))}
        </Typography>
      </Stack>
      <Stack
        direction={'column'}
        sx={{ width: { xs: '100%', md: '40%' }, gap: 7 }}
      >
        <Typography
          variant='h4'
          fontWeight={600}
          sx={{ marginTop: 2 }}
          textTransform={'uppercase'}
        >
          In The Box
        </Typography>
        <Stack direction={'column'} gap={2}>
          {includes?.map((include, index) => (
            <Stack key={index} direction={'row'} gap={2}>
              <Typography
                variant='body1'
                sx={{ color: '#d87D4A', letterSpacing: 1 }}
              >
                {include.quantity}x
              </Typography>
              <Typography
                key={index}
                variant='body1'
                sx={{ letterSpacing: 1, color: '#979797' }}
              >
                {include.item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductAdvices;
