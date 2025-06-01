import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/context/CartProvider';

const CartItem = ({
  userId,
  id,
  slug,
  name,
  price,
  number,
  image,
  isCheckout = false
}: {
  userId: string;
  id: string;
  slug: string;
  name: string;
  price: number;
  number: number;
  image: string;
  isCheckout?: boolean;
}) => {
  const { increaseProductCount, decreaseProductCount } =
    useContext(CartContext);
  const Router = useRouter();
  return (
    <Stack
      direction={'row'}
      gap={2}
      sx={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        ':hover': { cursor: 'pointer', backgroundColor: '#f1f1f1' }
      }}
    >
      <Stack direction={'row'} gap={2} onClick={() => Router.push(`/${slug}`)}>
        <Image
          alt='product thumbnail'
          src={image}
          width={40}
          height={40}
          className='w-auto h-auto rounded-md border border-gray-300'
          priority
        />
        <Stack direction={'column'} justifyContent={'center'}>
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
            onClick={() => decreaseProductCount(id, userId)}
          >
            <RemoveIcon sx={{ fontSize: 12 }} />
          </Button>
          <Typography variant='body1' color='initial' width={40} align='center'>
            {number}
          </Typography>

          <Button
            variant='outlined'
            onClick={() => increaseProductCount(id, userId)}
          >
            <AddIcon sx={{ fontSize: 12 }} />
          </Button>
        </ButtonGroup>
      )}
    </Stack>
  );
};

export default CartItem;
