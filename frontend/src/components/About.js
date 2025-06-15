import React from 'react';

function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="max-w-2xl mx-auto text-lg">
          <p className="mb-4">
            I am Saroj Anand Tripathy, currently working as a Consultant at Genpact, Hyderabad, and a B.Tech graduate in Electronics and Communication Engineering (IoT & Sensors) from VIT Vellore.
          </p>
          <p className="mb-4">
            I specialize in AWS cloud migration, backend development, and AI/ML model deployment. I have led projects for major clients like Morgan Stanley, Bank of America Merrill Lynch, and Shutterfly, automating data workflows, optimizing cloud infrastructure, and reducing production errors through innovative solutions.
          </p>
          <p>
            My passion lies in building scalable, efficient systems and leveraging machine learning to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}


export default About;
