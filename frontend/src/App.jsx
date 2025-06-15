// src/App.jsx
import { ChakraProvider, Box } from '@chakra-ui/react';
import ColorModeSwitcher from './components/ColorModeSwitcher';
import Hero from './components/Hero';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <ColorModeSwitcher />
        <Hero />
      </Box>
    </ChakraProvider>
  );
}

export default App;


