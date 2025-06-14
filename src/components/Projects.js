import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'AI-Powered Portfolio',
      description: 'A personal portfolio website with AI chatbot and resume analyzer.',
      link: '#',
      tech: ['React', 'Tailwind CSS', 'Node.js']
    },
    {
      title: 'E-commerce Platform',
      description: 'A simple online store with product listings and cart functionality.',
      link: '#',
      tech: ['React', 'Firebase']
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-blue-600 hover:underline font-medium">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
