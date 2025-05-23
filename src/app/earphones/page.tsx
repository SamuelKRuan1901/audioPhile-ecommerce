import About from '@/components/About';
import FamousProductsList from '@/components/FamousProductsList';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { Stack } from '@mui/material';

const EarphonePage = () => {
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
      <PageTitle title='Earphones' />
      EarphonePage
      <FamousProductsList />
      <About />
      <Footer />
    </Stack>
  );
};

export default EarphonePage;
