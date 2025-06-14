import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea id="message" rows="4" className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="mb-2">Or reach out directly:</p>
            <p className="mb-1">
              <a href="tel:+916264512351" className="text-blue-600 hover:underline">+91 6264512351</a>
            </p>
            <p className="mb-1">
              <a href="mailto:sarojanandtripathy.sat@gmail.com" className="text-blue-600 hover:underline">sarojanandtripathy.sat@gmail.com</a>
            </p>
            <p className="mt-1">
              <a href="https://www.linkedin.com/in/saroj-anand-tripathy/" className="text-blue-600 hover:underline">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Contact;
