import React, { useRef } from "react";
import i2 from '../../../assets/j1.png';

const JobCTA = () => {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            alert(`You selected: ${file.name}`);
        }
    };

    return (
        <section className="flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
            <div className="flex flex-col md:flex-row bg-[#B9313A] text-white md:rounded-lg shadow-lg py-8 px-4 md:px-12 md:max-w-[1100px]  m-auto">
                <div className="flex-1 flex justify-center items-center mb-2 md:mb-0">
                    <img
                        src={i2}
                        alt="Person Pointing"
                        className="md:w-[380px] w-[250px] h-auto rounded-xl"
                    />
                </div>

                <div className="flex-1">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 md:leading-tight md:mt-14">
                        Get Matched The Most Valuable Jobs, Just{" "}
                        <span className="underline font-semibold">Drop Your CV</span> at
                        Jinrai
                    </h1>
                    <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                        To apply, please email your updated CV to contact@jinraitech.com or drop your CV below.
                    </p>

                    <button
                        onClick={handleButtonClick}
                        className="flex items-center justify-center gap-2 bg-white border-2 border-white text-[#B9313A] font-semibold px-6 py-2 shadow-md hover:bg-[#B9313A] hover:text-white transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3m-4-4l-4-4m0 0l-4 4m4-4v12"
                            />
                        </svg>
                        Upload Your CV
                    </button>

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                    />
                </div>
            </div>
        </section>
    );
};

export default JobCTA;
