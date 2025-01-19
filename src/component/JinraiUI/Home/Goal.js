import React from "react";
import G1 from '../../../assets/G1.jpg';
import G2 from '../../../assets/H3.jpg';
import img1 from '../../../assets/mission.png';
import img2 from '../../../assets/opportunity.png';
import img3 from '../../../assets/targeting.png';
import { motion } from "framer-motion";

const Goal = () => {
  return (
    <section className="p-8 pt-12 pb-12 bg-[#f4f4f4] w-full" aria-labelledby="goal-section">
      <header className="md:grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1
          }}
          className="hidden md:flex flex-row justify-center gap-3"
        >
          <img
            src={G1}
            alt="Teamwork and collaboration for achieving business success"
            className="h-[500px] md:w-[300px] object-cover"
            loading="lazy"
          />
          <div className="flex flex-col gap-4 h-[500px]">
            <img
              src={G2}
              alt="Modern workspace promoting productivity and innovation"
              className="h-[400px] md:w-[300px] object-cover"
              loading="lazy"
            />
            <div className="flex items-center justify-center p-8 bg-[--bg-color] text-white rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h1M3 6h3M3 14h3M3 18h3M12 6h6m-3-3v3m-3 12v3m3-3v-3m-3 3H9m0 0H6m3 3H6"
                />
              </svg>
              <span className="ml-4 text-lg font-semibold">Quality Solutions</span>
            </div>
          </div>
        </motion.div>

        <div className="md:ml-5 space-y-5 w-full">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 1
            }}
          >
            <h2 id="goal-section" className="my-2 sm:text-4xl text-3xl text-[--bg-color] font-bold w-full">
              About Us
            </h2>
            <div className='flex'>
              <div className='sm:w-44 w-28 border-b-4 border-[--bg-color]'></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 1
            }}
            className="items-start space-x-2"
          >
            <img
              alt="Mission icon representing customer delight and business success"
              className="w-10 h-10"
              src={img1}
            />
            <h3 className="font-semibold mt-3">Our Mission</h3>
            <p className="text-gray-600">
              Our Mission is to keep our customer delighted by offering them excellent services and help them achieve their business goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 1
            }}
            className="items-start space-x-2"
          >
            <img
              alt="Vision icon symbolizing partnership and excellence in technology"
              src={img2}
              className="w-10 h-10"
            />
            <h3 className="font-semibold mt-3">Our Vision</h3>
            <p className="text-gray-600">
              Our vision within the next few years is to become the technology partner that everyone wants to work with.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 1
            }}
            className="items-start md:space-x-2"
          >
            <img
              alt="Goal icon depicting global recognition and service excellence"
              src={img3}
              className="w-10 h-10"
            />
            <h3 className="font-semibold mt-3">Our Goals</h3>
            <p className="text-gray-600">
              Our goal is to become a top services vendor organization globally.
            </p>
          </motion.div>
        </div>
      </header>
    </section>
  );
};

export default Goal;
