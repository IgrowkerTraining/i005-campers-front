import MainLayout from '@/layouts/MainLayout';
import SearchBar from '@/components/SearchBar';
import WelcomeSection from '@/components/WelcomeSection';
import HowItWorks from '@/components/HowItWorks';
import PromoteCamping from '@/components/PromoteCamping';

// const boxStyles = {
//   p: 4,
//   bg: 'primary.dark',
//   color: 'primary.light',
//   w: '100%',
//   borderRadius: 'md', 
//   _hover: {
//     transform: 'scale(1.01)' 
//   }
// };

function Home() {
  
  return (
    <MainLayout>
      <SearchBar />
      <WelcomeSection />
      <HowItWorks />
      <PromoteCamping />
    </MainLayout>
  );
}

export default Home;