import { Box } from '@chakra-ui/react'

const ChakraThemeExample = () => {
  return (
    <>
        <Box 
        bg="brand.500" 
        w="100%" 
        p={4} 
        color="white"
        borderRadius="md"
        boxShadow="lg"
      >
        <h1>
          Este es un ejemplo con brand.500!
        </h1>
      </Box>
      <Box 
        bg="primary.main" 
        w="100%" 
        p={4} 
        color="white"
        borderRadius="md"
        boxShadow="lg"
      >
        <h1>
          Este es un ejemplo con Verde! 
        </h1>
      </Box>
      <Box 
        bg="primary.dark" 
        w="100%" 
        p={4} 
        color="white"
        borderRadius="md"
        boxShadow="lg"
      >
        <h1>
          Este es un ejemplo con negro! 
        </h1>
      </Box>
      <Box 
        bg="primary.light" 
        w="100%" 
        p={4} 
        color="black"
        borderRadius="md"
        boxShadow="lg"
      >
        <h1>
          Este es un ejemplo con blanco! 
        </h1>
      </Box>
      <Box 
        bg="secondary.main" 
        w="100%" 
        p={4} 
        color="white"
        borderRadius="md"
        boxShadow="lg"
      >
        <h1>
          Este es un ejemplo con azul ligero! 
        </h1>
      </Box>
      <Box 
        bg="secondary.accent" 
        w="100%" 
        p={4} 
        color="white"
        borderRadius="md"
        boxShadow="lg"
      >
        <h1>
          Este es un ejemplo con lime! 
        </h1>
      </Box>
    </>
  )
}

export default ChakraThemeExample