import About from '@/components/About';
import FamousProductsList from '@/components/FamousProductsList';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { Stack } from '@mui/material';

const SpeakersPage = () => {
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
      EarphonePage
      <FamousProductsList />
      <About />
      <Footer />
    </Stack>
  );
};

export default SpeakersPage;
