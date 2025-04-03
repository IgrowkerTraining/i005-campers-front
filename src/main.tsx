import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme.ts'  // Make sure to add .ts extension

ReactDOM.createRoot(document.getElementById('root')!).render(  
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Box w="full" minH="100vh">
      <App />
    </Box >
    </ChakraProvider>
  </React.StrictMode>,
)