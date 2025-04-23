import { Alert, AlertIcon, AlertTitle, AlertDescription, Button } from '@chakra-ui/react';

interface BookingSuccessProps {
  campingName: string;
  startDate: string;
  endDate: string;
  onClose: () => void;
}

export const BookingSuccess: React.FC<BookingSuccessProps> = ({
  campingName,
  startDate,
  endDate,
  onClose,
}) => {
  return (
    <Alert
      status="success"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height={{ base: '200px', md: '250px' }}
      borderRadius="md"
      p={4}
      m={4}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        ¡Reserva Confirmada!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Tu reserva en <strong>{campingName}</strong> desde el {startDate} hasta el {endDate} ha sido confirmada exitosamente.
      </AlertDescription>
      <Button mt={4} colorScheme="teal" onClick={onClose}>
        Volver al Inicio
      </Button>
    </Alert>
  );
};