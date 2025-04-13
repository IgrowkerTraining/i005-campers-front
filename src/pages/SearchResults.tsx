import MainLayout from "@/layouts/MainLayout"
import { Box, Flex, Text } from "@chakra-ui/react"
import SearchBar from '@/components/SearchBar';



export const SearchResults = () => {

    
    return(
        <MainLayout>
            <SearchBar/>
            <Flex justifyContent={'space-between'} gap="4" width={{ base: '90%', md: 'lg' }} mx="auto" my={4}>
                <Box bg="#b3e0d3" borderRadius="md" px="2" display="flex" justifyContent="center" alignItems="center"><Text color="gray.500" textAlign="center" >Mejores reseñas</Text></Box>
                <Box bg="#b3e0d3" borderRadius="md" px="2" display="flex" justifyContent="center" alignItems="center"><Text color="gray.500" textAlign="center" >Bosque</Text></Box>
                <Box bg="#b3e0d3" borderRadius="md" px="2" display="flex" justifyContent="center" alignItems="center"><Text color="gray.500" textAlign="center" >Ría/Lago</Text></Box>
                <Box bg="#b3e0d3" borderRadius="md" px="2" display="flex" justifyContent="center" alignItems="center"><Text color="gray.500" textAlign="center" >Montaña</Text></Box>
            </Flex>
            <Box gap="2" width={{ base: '90%', md: 'lg' }} mx="auto"  my={0}>
                <Text fontSize="sm" color="gray.500">Se encontraton 15 resultados</Text>
                
            </Box>

        </MainLayout>
    )
}