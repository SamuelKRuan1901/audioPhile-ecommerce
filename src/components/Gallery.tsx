import { Stack } from '@mui/material';
import Image from 'next/image';

const Gallery = ({
  gallery
}: {
  gallery: { first: string; second: string; third: string };
}) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        width: '100%',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {gallery?.first && (
        <Image
          src={gallery?.first}
          alt='gallery'
          priority
          width={300}
          height={300}
          className='w-full h-auto'
        />
      )}
      <Stack
        direction={'column'}
        sx={{ width: { xs: '100%', md: '39%' }, gap: 2 }}
      >
        {gallery?.second && (
          <Image
            src={gallery?.second}
            alt='gallery'
            priority
            width={300}
            height={300}
            className='w-auto h-auto'
          />
        )}
        {gallery?.third && (
          <Image
            src={gallery?.third}
            alt='gallery'
            priority
            width={300}
            height={300}
            className='w-auto h-auto'
          />
        )}
      </Stack>
    </Stack>
  );
};

export default Gallery;
