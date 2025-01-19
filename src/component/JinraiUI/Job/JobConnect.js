import React from "react";
import { FaArrowRight } from "react-icons/fa";
import i1 from '../../../assets/j3.png';
import { useNavigate } from 'react-router-dom';

const JobConnect = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col md:flex-row items-center justify-center lg:gap-28 px-4 md:px-24 py-8 bg-white mb-9">
            <div className="max-w-lg">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:leading-[60px]">
                    We Help You Connect With
                    <span className="text-[--highlight-color]"> The Organisation</span>
                </h1>
                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                Our platform bridges the gap between talented individuals and leading organizations, ensuring seamless communication and career opportunities                </p>

                <div className="flex sm:flex-row flex-col gap-4">
                    <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#B9313A] text-white font-semibold hover:text-[#B9313A] hover:bg-white transition duration-300 rounded hover:border-2 border-[#B9313A]">
                    Start Your Journey <FaArrowRight />
                    </button>
                    <button className="px-6 py-3 border-2 border-[#B9313A] text-[#B9313A] font-semibold hover:bg-[#B9313A] hover:text-white transition duration-300 rounded" onClick={() => navigate('/contact')}>
                        Contact Us
                    </button>
                </div>
            </div>

            <div className="mt-12 md:mt-0">
                <img
                    src={i1}
                    alt="Person interacting with digital screens"
                    className="md:w-[450px] w-[300px]"
                />
            </div>
        </div>
    );
};

export default JobConnect;
