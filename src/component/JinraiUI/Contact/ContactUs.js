import React from 'react';
import H1 from '../../../assets/c6.jpg';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "home",
        "item": "https://jinraitech.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "contact",
        "item": "https://jinraitech.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative flex items-center justify-center md:h-[70vh] h-[50vh]">
        <img
          src={H1}
          alt="Contact us background image showcasing an innovative agency providing expert project management and technology solutions"
          className="absolute inset-0 object-cover md:h-[70vh] h-[50vh] w-full"
        />
        <div className="absolute inset-0 bg-[#852D2D] opacity-30"></div>
        <div className="relative z-10 text-center text-white w-full">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1
            }}
            className="md:text-7xl text-4xl font-bold leading-tight md:mb-8">
            Get in Touch with Us
          </motion.h1>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.7 },
              ease: "easeIn",
              duration: 1
            }}
            className="flex justify-center items-center md:space-x-4 px-6 py-2 md:mx-64"
          >
            <Link to="/" className="py-2 transition text-[16px]" aria-label="Go to Home Page">Home</Link>
            <span className="py-2 transition">{`->`}</span>
            <Link to="/contact" className="py-2 transition text-[16px]" aria-label="Go to Contact Page">Contact</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
