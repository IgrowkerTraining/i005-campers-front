import MainLayout from '@/layouts/MainLayout';
import SearchBar from '@/components/SearchBar';
import WelcomeSection from '@/components/WelcomeSection';

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
    </MainLayout>
  );
}

export default Home;