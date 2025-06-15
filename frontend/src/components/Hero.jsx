// src/components/Hero.jsx
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box
      minH="100vh"
      px={4}
      py={6}
      bgGradient="linear(to-br, gray.900, gray.800)"
    >
      <VStack spacing={4} align="center" justify="center" h="100%">
        <Heading size="2xl" color="teal.300">
          Hi, I'm Saroj
        </Heading>
        <Text fontSize="lg" color="gray.300" textAlign="center" maxW="2xl">
          I'm building a full-stack AI-enhanced portfolio with resume analyzer, chatbot, and dynamic UI.
        </Text>
      </VStack>
    </Box>
  );
};

export default Hero;
