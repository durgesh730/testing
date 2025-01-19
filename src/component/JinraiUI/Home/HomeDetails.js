import React from 'react';
import H1 from '../../../assets/H4.jpg';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const HomeDetails = () => {
    const navigate = useNavigate();

    return (
        <section className="relative md:h-[85vh] h-[70vh] flex items-center justify-center" aria-labelledby="home-details">
            <img
                src={H1}
                alt="Background of an innovative agency providing expert project management and technology solutions"
                className="absolute inset-0 object-cover w-full h-full"
                loading="lazy"
            />

            <div className="absolute inset-0 bg-[#852D2D] opacity-35"></div>

            <div className="relative z-10 text-center text-white">
                <motion.h1
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1
                    }}
                    className="md:text-7xl text-4xl mx-auto font-bold leading-tight mb-5 md:w-[800px] w-[80%]  "
                    id="home-details" // Added for improved accessibility
                >
                    Leading Your Project With Expert Solutions
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
                    className="md:text-sm text-[12px] font-normal mb-8 md:w-[800px] w-[90%] mx-auto text-white"
                >
                    A dynamic range of services designed to empower organizations to achieve their business objectives with the knowledge and strategies needed to thrive in today’s ever-evolving technology landscape.
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
                    className="sm:flex sm:justify-center space-x-4 w-full"
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
    );
}

export default HomeDetails;
