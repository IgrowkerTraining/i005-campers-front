import { useParams } from 'react-router-dom';
import { BookingGuest } from '@/components/BookingGuest/BookingGuest';
import MainLayout from "@/layouts/MainLayout";
import { useCampingStore } from '@/store/CampingStore';
import { useEffect, useState } from 'react';
import { CampingType } from '@/types/camping';
import { Box, Text, Spinner } from '@chakra-ui/react';

const BookingGuestPage: React.FC = () => {
  const { campingId } = useParams<{ campingId: string }>();
  const { campings, fetchCampings, isLoading } = useCampingStore();
  const [currentCamping, setCurrentCamping] = useState<CampingType | null>(null);

  useEffect(() => {
    if (!campings || campings.length === 0) {
      fetchCampings();
    }
  }, [fetchCampings, campings]);

  useEffect(() => {
    if (campings?.length > 0 && campingId) {
      const camping = campings.find(camp => Number(camp.id) === Number(campingId));
      setCurrentCamping(camping || null);
    }
  }, [campings, campingId]);

  if (isLoading) {
    return (
      <MainLayout>
        <Box textAlign="center" py={10}>
          <Spinner size="xl" />
          <Text mt={4}>Cargando datos del camping...</Text>
        </Box>
      </MainLayout>
    );
  }

  if (!currentCamping) {
    return (
      <MainLayout>
        <Box textAlign="center" py={10}>
          <Text>No se encontró el camping con ID: {campingId}</Text>
        </Box>
      </MainLayout>
    );
  }


  return (
    <MainLayout>
      <BookingGuest
        campingName={currentCamping.name}
        pricePerNight={currentCamping.pricing[0]?.pricePerNight || 0}
      />
    </MainLayout>
  );
};

export default BookingGuestPage; 
