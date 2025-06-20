import { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  VStack,
  Text,
  Textarea,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';

export default function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [responses, setResponses] = useState([]);

  // Auto-open chatbot with a welcome message on page load
  useEffect(() => {
    setIsOpen(true);
    setResponses([
      {
        user: '',
        bot: "👋 Welcome! Do you want to ask anything about the portfolio?",
      },
    ]);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    const newResponse = {
      user: question,
      bot: "👋 Hi there! I'm a portfolio assistant. My AI brain is still warming up — stay tuned for smart responses soon!",
    };
    setResponses((prev) => [...prev, newResponse]);
    setQuestion('');
  };

  // Theme-aware styles
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const messageBg = useColorModeValue('gray.100', 'gray.700');
  const userTextColor = useColorModeValue('gray.800', 'gray.200');
  const botTextColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <>
      {/* Floating Chat Toggle Button */}
      <IconButton
        icon={isOpen ? <CloseIcon /> : <ChatIcon />}
        aria-label="Toggle Chatbot"
        position="fixed"
        bottom="24px"
        right="24px"
        zIndex="popover"
        colorScheme="teal"
        borderRadius="full"
        size="lg"
        onClick={toggleChat}
      />

      {/* Chat Widget Box */}
      {isOpen && (
        <Box
          position="fixed"
          bottom="90px"
          right="24px"
          width="300px"
          maxH="500px"
          bg={bgColor}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="lg"
          boxShadow="xl"
          p={4}
          zIndex="popover"
          overflowY="auto"
        >
          <VStack spacing={3} align="stretch">
            <Text fontWeight="bold" fontSize="lg" color={userTextColor}>
              AI Chatbot
            </Text>
            {responses.map((entry, index) => (
              <Box key={index} bg={messageBg} p={2} borderRadius="md">
                {entry.user && (
                  <>
                    <Text fontWeight="bold" color={userTextColor}>You:</Text>
                    <Text color={userTextColor}>{entry.user}</Text>
                  </>
                )}
                <Text fontWeight="bold" mt={2} color={botTextColor}>Bot:</Text>
                <Text color={botTextColor}>{entry.bot}</Text>
              </Box>
            ))}
            <Textarea
              placeholder="Ask something..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              size="sm"
              color={userTextColor}
            />
            <Button
              size="sm"
              colorScheme="teal"
              onClick={handleSend}
              isDisabled={!question.trim()}
            >
              Send
            </Button>
          </VStack>
        </Box>
      )}
    </>
  );
}
