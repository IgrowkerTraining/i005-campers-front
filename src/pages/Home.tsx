import MainLayout from '@/layouts/MainLayout';
import WelcomeSection from '@/components/WelcomeSection';
import SearchBar from '@/components/SearchBar';
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
      <SearchBar onSearch={(query) => console.log('Buscando:', query)}/>
      <WelcomeSection />
      <HowItWorks />
      <PromoteCamping />
    </MainLayout>
  );
}

export default Home;