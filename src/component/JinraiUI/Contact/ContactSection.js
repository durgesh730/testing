import React from 'react';
import { FaPhoneAlt, FaHome, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="container mx-auto w-[80vw] py-12 mt-8">
      {/* Heading */}
      <h1 className="sm:text-4xl text-3xl font-bold text-center text-[--bg-color] mb-2">Get in Touch with Jinrai Technologies</h1>
      <p className="text-center text-gray-600 mb-12">
        Contact us for IT, Telecom services, or any inquiries. We're here to assist you with your business needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Visit Us Section */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <div className="text-[--bg-color] flex justify-center text-4xl mb-4">
            <FaHome aria-label="Location Icon" />
          </div>
          <h2 className="text-xl font-bold mb-2">Visit Us</h2>
          <address className="text-gray-600">
            S-08, Building no. A-60, Sector-2, Noida, UP, India - 201301
          </address>
        </div>

        {/* Call Us Section */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <div className="text-[--bg-color] flex justify-center text-4xl mb-4">
            <FaPhoneAlt aria-label="Phone Icon" />
          </div>
          <h2 className="text-xl font-bold mb-2">Call Us</h2>
          <p className="text-gray-600">
            <a href="tel:+911204075129" className="text-[--bg-color]">+91-120-4075129</a>
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <div className="text-[--bg-color] flex justify-center text-4xl mb-4">
            <FaEnvelope aria-label="Email Icon" />
          </div>
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            <a href="mailto:contact@jinraitech.com" className="text-[--bg-color]">contact@jinraitech.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
