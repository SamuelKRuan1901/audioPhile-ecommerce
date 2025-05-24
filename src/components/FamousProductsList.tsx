import { Stack } from '@mui/material';
import CategoryItem from './CategoryItem';
import HeadphoneImg from '@/assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerImg from '@/assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphoneImg from '@/assets/shared/desktop/image-category-thumbnail-earphones.png';

const FamousProductsList = () => {
  const products = [
    {
      id: 1,
      name: 'Headphones',
      path: '/headphones',
      image: HeadphoneImg
    },
    {
      id: 2,
      name: 'Speakers',
      path: '/speakers',
      image: SpeakerImg
    },
    {
      id: 3,
      name: 'Earphones',
      path: '/earphones',
      image: EarphoneImg
    }
  ];
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      gap={{ xs: 12, md: 8 }}
      sx={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginY: 20
      }}
    >
      {products.map((product) => (
        <CategoryItem
          key={product.id}
          name={product.name}
          image={product.image as unknown as string}
          path={product.path}
        />
      ))}
    </Stack>
  );
};

export default FamousProductsList;
