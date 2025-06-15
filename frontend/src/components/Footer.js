import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Saroj Anand Tripathy. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/yourusername" className="hover:text-blue-200">GitHub</a>
          <a href="https://www.linkedin.com/in/saroj-anand-tripathy/" className="hover:text-blue-200">LinkedIn</a>
          <a href="mailto:sarojanandtripathy.sat@gmail.com" className="hover:text-blue-200">Email</a>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
