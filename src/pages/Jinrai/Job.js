import React from "react";
import H1 from "../../assets/job3.jpg";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import AccordionExpandDefault from "../../component/JinraiUI/Job/JobAccordian";
import JobCTA from "../../component/JinraiUI/Job/JobCTA";
import JobCategories from "../../component/JinraiUI/Job/JobCategory";
import JobConnect from "../../component/JinraiUI/Job/JobConnect";
import Navbar from "../../component/JinraiUI/Navbar";
import Footer from "../../component/JinraiUI/Footer";

const Job = () => {
  const navigate = useNavigate();

  return (
    <> 
    <Navbar/>
      <section className="relative flex flex-col items-center justify-center md:h-[80vh] h-[60vh] bg-[#f4f4f4]">
        <img
          src={H1}
          alt="Background of an innovative agency providing expert project management and technology solutions"
          className="absolute inset-0 object-cover md:h-[70vh] h-[50vh] w-full"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-[#852D2D] opacity-30 md:h-[70vh] h-[50vh]"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="md:text-7xl text-3xl font-bold leading-tight sm:mb-8 mb-2"
          >
            Get The{" "}
            <span className="text-[--bg-color]" style={{ color: "white" }}>
              Right job
            </span>
            <br />
            You Deserve
          </motion.h1>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1
            }}
            className="md:text-sm text-[12px] font-normal md:w-[530px] w-[90%] mx-auto text-white mb-12"
          >
            Our team is growing! Join us to change the world while having fun along the way!
          </motion.p>

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
            className="sm:flex sm:justify-center space-x-4 w-full md:mb-0 mb-9"
          >
            <button
              onClick={() => navigate('/portfolio')}
              className="md:px-6 px-3 md:py-3 py-2 font-semibold bg-[--bg-color] rounded hover:bg-[#ff4b4c]"
              aria-label="Learn more about our portfolio"
            >
              Learn More
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="md:px-6 px-3 md:py-3 py-2 font-semibold bg-white text-gray-800 rounded hover:bg-gray-100"
              aria-label="Contact us for more information"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      <AccordionExpandDefault />
      <JobCTA />
      <JobConnect />
      <JobCategories />
      <Footer/>
    </>
  );
};

export default Job;
