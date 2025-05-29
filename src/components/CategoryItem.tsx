import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Stack, Typography } from '@mui/material';

const CategoryItem = ({
  name,
  image,
  path
}: {
  name: string;
  image: string;
  path: string;
}) => {
  return (
    <Stack
      gap={2}
      sx={{
        textAlign: 'center',
        position: 'relative',
        height: { xs: 350, md: 370 },
        width: { xs: 300, md: 330 }
      }}
    >
      <Image
        src={image}
        alt={name}
        priority
        width={200}
        height={100}
        className='w-full mx-auto z-1'
      />
      <Stack
        direction={'column'}
        sx={{
          gap: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: { xs: 330, md: 300, lg: 330 },
          height: 200,
          backgroundColor: '#f1f1f1',
          paddingTop: 15,
          paddingBottom: 4,
          position: 'absolute',
          bottom: 0,
          borderRadius: 3
        }}
      >
        <Typography variant='h6' textTransform={'uppercase'} fontWeight={700}>
          {name}
        </Typography>
        <Button
          href={path}
          variant='text'
          sx={{ color: '#d87d4a', width: 200 }}
          endIcon={<ChevronRightIcon />}
        >
          Shop
        </Button>
      </Stack>
    </Stack>
  );
};

export default CategoryItem;
