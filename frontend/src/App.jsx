// App.jsx
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import ColorModeSwitcher from './components/ColorModeSwitcher';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import Chatbot from './pages/Chatbot';
import ChatbotPopup from './components/ChatbotPopup';

function App() {
  return (
    <Box minH="100vh" px={4} py={4}>
      <ColorModeSwitcher />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumeAnalyzer />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
      <ChatbotPopup />
    </Box>
  );
}

export default App;
