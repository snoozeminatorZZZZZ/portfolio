import React from 'react';

function Skills() {
  const skills = [
    'Python3', 'Java', 'SQL', 'PostgreSQL',
    'AWS (Lambda, S3, CloudWatch, IAM)', 'Terraform', 'Jenkins', 'CI/CD',
    'FastAPI', 'REST APIs', 'Microservices', 'Camunda BPM', 'Flask', 'Django',
    'GitHub', 'IntelliJ IDEA', 'PyCharm', 'VS Code', 'Docker',
    'Scikit-learn', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'BiLSTM', 'Transfer Learning', 'Model Deployment',
    'Agile', 'Scrum', 'TDD', 'SDLC', 'Multi-threading', 'Multi-processing'
  ];

  return (
    <section id="skills" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md px-6 py-3 font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
