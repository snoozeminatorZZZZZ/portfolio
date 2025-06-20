import { Box, Flex, HStack, IconButton, useColorModeValue, Spacer, Link as ChakraLink } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Resume Analyzer', to: '/resume' },
  { name: 'Chatbot', to: '/chatbot' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={2} borderRadius="md" mb={4} shadow="md">
      <Flex alignItems="center">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: 'none' }}
          onClick={toggleMenu}
        />
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item) => (
            <ChakraLink
              as={Link}
              key={item.name}
              to={item.to}
              fontWeight={location.pathname === item.to ? 'bold' : 'normal'}
              color={location.pathname === item.to ? 'teal.400' : 'inherit'}
            >
              {item.name}
            </ChakraLink>
          ))}
        </HStack>
        <Spacer />
      </Flex>

      {isOpen && (
        <Box mt={4} display={{ md: 'none' }}>
          {navItems.map((item) => (
            <Box key={item.name} py={1}>
              <ChakraLink
                as={Link}
                to={item.to}
                onClick={toggleMenu}
                fontWeight={location.pathname === item.to ? 'bold' : 'normal'}
                color={location.pathname === item.to ? 'teal.400' : 'inherit'}
              >
                {item.name}
              </ChakraLink>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
