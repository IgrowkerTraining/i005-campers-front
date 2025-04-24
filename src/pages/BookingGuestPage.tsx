import { BookingGuest } from '/workspaces/i005-campers-front/src/components/BookingGuest/BookingGuest.tsx'; 
import MainLayout from "@/layouts/MainLayout";
import HowItWorks from '@/components/HowItWorks';

export const BookingGuestPage: React.FC = () => {
  const campingData = {
    name: "Camping Ejemplo",
    pricePerNight: 5000,
  };

  return (
    <MainLayout>
      <BookingGuest
        campingName={campingData.name}
        pricePerNight={campingData.pricePerNight}
      />
      <HowItWorks />
    </MainLayout>
  );
};