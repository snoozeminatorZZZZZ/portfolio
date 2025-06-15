// src/components/Navbar.jsx
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Button,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box px={4} py={3} shadow="md" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Flex alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          Saroj Tripathy
        </Text>
        <Spacer />
        <HStack spacing={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Contact</Button>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
