import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import '@fontsource/inter/400.css'; // Peso normal
import '@fontsource/inter/600.css'; // Peso semibold
import '@fontsource/inter/700.css';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      500: '#2a69ac',
    },
    primary: {
      main: '#40b291',    
      dark: '#00120d',    
      light: '#f6fffc',   
    },
    secondary: {
      main: '#0097b1',    
      accent: '#7ed958',  
    },
    fonts: {
      heading: "'Inter', sans-serif", 
      body: "'Inter', sans-serif",   
    },
  },
});

export default theme;