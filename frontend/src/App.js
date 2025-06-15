import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackendTest from './components/BackendTest';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
      <BackendTest />
      <Chatbot />
    </div>
  );
}

export default App;
