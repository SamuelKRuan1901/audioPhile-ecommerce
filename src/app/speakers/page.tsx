import About from '@/components/About';
import FamousProductsList from '@/components/FamousProductsList';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { Stack } from '@mui/material';
import { data } from '@/lib/data';
import ProductItem from '@/components/ProductItem';

const SpeakersPage = () => {
  const speakers = data.filter((product) => product.category === 'speakers');
  return (
    <Stack
      direction={'column'}
      sx={{
        width: '100%',
        minHeight: '100vh',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <PageTitle title='Speakers' />
      <Stack direction={'column'} gap={8}>
        {speakers.reverse().map((speaker) => (
          <ProductItem
            key={speaker.id}
            id={speaker.id}
            name={speaker.name}
            description={speaker.description}
            isNew={speaker.new}
            href={`/${speaker.slug}`}
            image={speaker.image as unknown as string}
          />
        ))}
      </Stack>
      <FamousProductsList />
      <About />
      <Footer />
    </Stack>
  );
};

export default SpeakersPage;
