import {
  Box,
  VStack,
  Text,
  useColorModeValue,
  Heading,
  Container,
  Image,
  Fade,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import SectionWrapper from '../components/SectionWrapper';

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const avatarImages = [
    '/photo1.jpg',
    '/photo2.png',
    '/photo3.jpg',
    '/photo4.jpg',
  ];

  useEffect(() => {
    const typewriterTimeout = setTimeout(() => {
      setShowTypewriter(true);
    }, 1000);

    const imageInterval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % avatarImages.length);
        setFadeIn(true);
      }, 300); // smooth fade between image changes
    }, 5000);

    return () => {
      clearInterval(imageInterval);
      clearTimeout(typewriterTimeout);
    };
  }, []);

  const textColor = useColorModeValue('gray.800', 'gray.100');
  const bgCard = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box minH="100vh" position="relative" px={4} overflowX="hidden">
      <ParticlesBackground />

      <VStack spacing={6} align="center" justify="center" minH="100vh" zIndex={1} textAlign="center">
        {/* Dynamic Slideshow Image */}
        <Flex
        align="center"
        justify="center"
        position="relative"
        boxSize={{ base: '250px', md: '300px' }}
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius="lg"
        overflow="hidden"
        border="4px solid teal"
        boxShadow="0 0 25px teal"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                >
                <Fade key={currentImageIndex} in={fadeIn} unmountOnExit>
                    <Image
                        src={avatarImages[currentImageIndex]}
                        alt={`Saroj Avatar ${currentImageIndex}`}
                        boxSize={{ base: '250px', md: '300px' }}
                        borderRadius="lg"
                        objectFit="contain"
                        border="4px solid teal"
                        boxShadow="0 0 25px teal"
                        transition="all 0.4s ease-in-out"
                        position="absolute"
                        top="0"
                        left="0"
                    />
                </Fade>
            </motion.div>
        </Flex>

        {/* Typewriter Text */}
        {showTypewriter && (
            <Box zIndex={2} px={4}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                <Text
                    fontSize={{ base: 'lg', md: '2xl' }}
                    color={textColor}
                    maxW="3xl"
                    textAlign="center"
                >
                <Typewriter
                    words={[
                    "Hi, I'm Saroj Anand Tripathy — passionate about AI, backend systems, and full-stack architecture.",
                    "3+ years in Python, Java, AWS, and AI-powered systems.",
                    "Currently Consultant at Genpact | Ex-Samsung R&D | ML & Cloud Enthusiast.",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                />
                </Text>
                </motion.div>
            </Box>
            )}

      </VStack>

      {/* Scroll Sections */}
      <SectionWrapper delay={1.2}>
        <Container bg={bgCard} borderRadius="lg" p={6} boxShadow="md" maxW="4xl">
          <Heading fontSize="2xl" mb={2} color="teal.400">🚀 Projects</Heading>
          <Text color={textColor}>Project showcase coming soon...</Text>
        </Container>
      </SectionWrapper>

      <SectionWrapper delay={1.4}>
        <Container bg={bgCard} borderRadius="lg" p={6} boxShadow="md" maxW="4xl">
          <Heading fontSize="2xl" mb={2} color="teal.400">🧠 Skills</Heading>
          <Text color={textColor}>Python, Java, AWS, ML, and more.</Text>
        </Container>
      </SectionWrapper>

      <SectionWrapper delay={1.4}>
        <Container bg={bgCard} borderRadius="lg" p={6} boxShadow="md" maxW="4xl">
          <Heading fontSize="2xl" mb={2} color="teal.400">💼 Experience</Heading>
          <Text color={textColor}>Consultant at Genpact, Samsung R&D intern, and more.</Text>
        </Container>
      </SectionWrapper>

      <SectionWrapper delay={1.6}>
        <Container bg={bgCard} borderRadius="lg" p={6} boxShadow="md" maxW="4xl">
          <Heading fontSize="2xl" mb={2} color="teal.400">📚 Blog</Heading>
          <Text color={textColor}>Unique insights coming soon...</Text>
        </Container>
      </SectionWrapper>

      <SectionWrapper delay={1.8}>
        <Container bg={bgCard} borderRadius="lg" p={6} boxShadow="md" maxW="4xl">
          <Heading fontSize="2xl" mb={2} color="teal.400">📫 Contact</Heading>
          <Text color={textColor}>sarojanandtripathy.sat@gmail.com</Text>
        </Container>
      </SectionWrapper>
    </Box>
  );
}
