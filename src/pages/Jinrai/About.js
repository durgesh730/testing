import React from 'react';
import H1 from '../../assets/c4.jpg';
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import img1 from '../../assets/mission.png';
import img3 from '../../assets/targeting.png';
import LeaderShip from '../../component/JinraiUI/AboutUs/LeaderShip';
import CompanyDiscription from '../../component/JinraiUI/AboutUs/CompanyDiscription';
import { Link } from 'react-router-dom';
import Navbar from '../../component/JinraiUI/Navbar';
import Footer from '../../component/JinraiUI/Footer';

const About = () => {
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
        "name": "about",
        "item": "https://jinraitech.com/about"
      }
    ]
  };

  return (
    <>
      <Navbar/>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative flex flex-col items-center justify-center md:h-[85vh] h-[150vh]  bg-white">
        <img
          src={H1}
          alt="Background of an innovative agency providing expert project management and technology solutions"
          className="absolute inset-0 object-cover md:h-[70vh] h-[70vh] w-full"
        />

        <div className="absolute inset-0 bg-[#852D2D] opacity-30 md:h-[70vh] h-[70vh]"></div>

        <div className="relative z-10 text-center text-white w-full top-0">
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
            About Us
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
            <Link to="/" className="py-2 transition text-[16px]">Home</Link>
            <span className=" py-2 transition">{`->`}</span>
            <Link to="/about" className="py-2 transition text-[16px]">About</Link>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="relative md:top-24 top-24 z-10 md:flex md:justify-center mb-12 md:mx-44 bg-[#f4f4f4]">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-white p-4 shadow-lg space-y-3 pb-10 md:w-[25vw]">
            <img alt="Icon representing our mission to delight customers with excellent services" className="w-10 h-10" src={img1} />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-center">
              Our Mission is to keep our customer delighted by offering them excellent services and help them achieving their business goals.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-[--bg-color] p-4 shadow-lg text-white md:space-y-3 md:w-[25vw] pb-10">
            <img alt="Icon representing our goal to be a top global service vendor" src={img3} className="w-10 h-10" />
            <h3 className="text-xl font-semibold mb-2">Our Goals</h3>
            <p className="text-white text-center">
              Our goal is to become Top Services Vendor organization globally.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-black p-4 shadow-lg text-white space-y-3 md:w-[25vw] md:pb-10">
            <FaEye color='white' className="w-10 h-10" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-center">
              Our vision within the next few years is to become the technology partner that everyone wants to work with.
            </p>
          </div>
        </div>
      </section>

      <CompanyDiscription />
      <LeaderShip />
      <Footer/>
    </>
  );
};

export default About;
