import About from '@/components/About';
import AdvanceProduct from '@/components/AdvanceProduct';
import FamousProductsList from '@/components/FamousProductsList';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <Stack
      sx={{
        widows: '100vw',
        height: '100vh',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#000000'
      }}
    >
      <Hero />
      <FamousProductsList />
      <AdvanceProduct />
      <About />
      <Footer />
    </Stack>
  );
}
