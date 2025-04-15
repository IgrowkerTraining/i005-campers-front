import MainLayout from "@/layouts/MainLayout"
// import { Box, Flex, Text } from "@chakra-ui/react"
import SearchBar from '@/components/SearchBar';
import SearchView from "@/components/SearchView";



export const Search = () => {

    
    return(
        <MainLayout>
            <SearchBar/>
            {/* <Text fontSize="sm" color="gray.500">Se encontraton 15 resultados</Text> */}
            <SearchView />
        </MainLayout>
    )
}