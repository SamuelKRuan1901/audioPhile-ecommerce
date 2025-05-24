import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const ProductItem = ({
  id,
  isNew,
  name,
  description,
  href,
  image
}: {
  id: number;
  isNew: boolean;
  name: string;
  description: string;
  href: string;
  image: string;
}) => {
  return (
    <Stack
      key={id}
      direction={{
        xs: 'column-reverse',
        md: `${id % 2 !== 0 ? 'row-reverse' : 'row'}`
      }}
      width={{ xs: 370, md: 900 }}
      sx={{ justifyContent: 'center', alignItems: 'center' }}
      gap={{ xs: 4, md: 8 }}
    >
      <Stack
        direction={'column'}
        sx={{
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'start' },
          textAlign: { xs: 'center', md: 'start' },
          gap: 2,
          width: { xs: '100%', md: 400 },
          padding: 4
        }}
      >
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
        <Typography variant='h4' fontWeight={600}>
          {name}
        </Typography>
        <Typography variant='body1' color='#979797' letterSpacing={1}>
          {description}
        </Typography>
        <Button
          variant='contained'
          href={href}
          sx={{
            backgroundColor: '#d87d4a',
            color: '#ffffff',
            width: 200,
            ':hover': {
              backgroundColor: '#ffffff',
              color: '#d87d4a'
            }
          }}
        >
          See Product
        </Button>
      </Stack>
      <Image
        src={image as unknown as string}
        alt={name}
        priority
        width={400}
        height={400}
        className='w-auto h-auto'
      />
    </Stack>
  );
};

export default ProductItem;
