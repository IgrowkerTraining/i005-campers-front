import {
    Box,
    Text,
    Center,
} from "@chakra-ui/react";

import icon from "@/assets/Icongreen.png";
import name from "@/assets/namegreen.png";


const CampingForm: React.FC = () => {
    
    return (
        <Box
            maxW="400px"
            mx="auto"
            mt="8"
            p="6"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="lg"
            bg="primary.light"
        >
            <Center mb="8">
                <Box textAlign="center">
                    <img src={icon} alt="Campers Icon" style={{ width: "150px" }} />
                    <img src={name} alt="Campers Name" style={{ width: "150px" }} />
                </Box>
            </Center>
            <Text textAlign="center" fontSize="2xl" fontWeight="bold" mb="6">
                Inicia sesión
            </Text>
        </Box>
    );
};

export default CampingForm;
