import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import './index.css';

const theme = extendTheme({
  colors: {
    brand: {
      navy: '#071B3A',
      blue: '#1267C9',
      cyan: '#00A9E8',
      light: '#F7F9FC',
      text: '#162033',
      muted: '#64748B',
    },
  },
  fonts: {
    heading: 'Space Grotesk, sans-serif',
    body: 'DM Sans, sans-serif',
  },
});

createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
);