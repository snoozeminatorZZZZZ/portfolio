import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      isRound
      size="md"
      alignSelf="flex-end"
      onClick={toggleColorMode}
      aria-label="Toggle Color Mode"
    />
  );
}

export default ColorModeSwitcher;
