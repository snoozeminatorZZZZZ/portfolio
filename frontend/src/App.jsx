// App.jsx
import { Box, Heading, Text, VStack, useColorMode } from '@chakra-ui/react';
import ColorModeSwitcher from './components/ColorModeSwitcher';

function App() {
  const { colorMode } = useColorMode();

  return (
    <Box
      minH="100vh"
      px={4}
      py={6}
      bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
    >
      <ColorModeSwitcher />
      <VStack spacing={4} align="center" justify="center" h="100%">
        <Heading size="2xl" color="teal.300">
          Hi, I'm Saroj
        </Heading>
        <Text fontSize="lg" color="gray.500" textAlign="center" maxW="2xl">
          I'm building a full-stack AI-enhanced portfolio with resume analyzer, chatbot, and dynamic UI.
        </Text>
      </VStack>
    </Box>
  );
}

export default App;
