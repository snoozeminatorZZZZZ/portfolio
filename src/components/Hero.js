import React from 'react';

function Hero() {
  return (
    <section id="hero" className="min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Saroj Anand Tripathy</h1>
        <h2 className="text-xl md:text-2xl mb-6">Consultant at Genpact | B.Tech in ECE (IoT & Sensors) from VIT Vellore</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          AWS Migration Specialist, Backend Developer, and AI/ML Enthusiast with experience in cloud automation, workflow optimization, and machine learning model deployment.
        </p>
        <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
          Get In Touch
        </a>
      </div>
    </section>
  );
}


export default Hero;
