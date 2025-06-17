// src/components/ColorModeSwitcher.jsx
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      isRound
      size="md"
      alignSelf="flex-end"
      onClick={toggleColorMode}
      aria-label="Toggle color mode"
    />
  );
};

export default ColorModeSwitcher;
