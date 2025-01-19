import React from "react";
import { FiLayout, FiCloud, FiSmartphone, FiUsers, FiSettings, FiCheckCircle } from "react-icons/fi"; 

const Process = () => {
    const services = [
        {
            icon: <FiLayout size={40} aria-hidden="true" />,
            title: "Product Engineering",
            description: "Product Engineering focuses on designing scalable solutions, managing the product lifecycle, developing software, and ensuring quality through rigorous testing and continuous enhancement.",
        },
        {
            icon: <FiCloud size={40} aria-hidden="true" />,
            title: "Cloud",
            description: "Cloud services encompass designing, deploying, and managing secure, scalable infrastructure, with ongoing support and robust security to ensure continuous availability.",
        },
        {
            icon: <FiSmartphone size={40} aria-hidden="true" />,
            title: "Application Development",
            description: "Application Development drives innovation, focusing on designing robust architectures, deploying applications, and refining them through continuous testing and support.",
        },
        {
            icon: <FiUsers size={40} aria-hidden="true" />,
            title: "Staff Augmentation",
            description: "Staff Augmentation provides flexible, scalable staffing solutions, offering skilled professionals to meet project demands and adapt to changing requirements.",
        },
        {
            icon: <FiSettings size={40} aria-hidden="true" />,
            title: "DevOps",
            description: "DevOps integrates development and operations, emphasizing continuous delivery, automation, configuration management, and proactive monitoring to ensure stable performance.",
        },
        {
            icon: <FiCheckCircle size={40} aria-hidden="true" />,
            title: "Code Review and Optimization",
            description: "Code Review and Optimization involve peer reviews, code refactoring, performance enhancements, and automated analysis to maintain high-quality, efficient software development.",
        },
    ];

    return (
        <section className="py-12 bg-[#f4f4f4]" aria-labelledby="services-heading">
            <header className="text-center mb-8">
                <h3 className="font-semibold uppercase sm:text-lg text-sm">Our Focus Area</h3>
                <h2 id="services-heading" className="my-2 sm:text-4xl text-3xl text-[--bg-color] font-bold">
                    What We're Offering
                </h2>
                <div className="flex flex-row justify-center mt-6">
                    <div className="w-44 border-b-4 border-[--bg-color]"></div>
                </div>
            </header>

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 px-4 md:mx-32 my-12">
                {services.map((service, index) => (
                    <article
                        key={index}
                        className="relative bg-white shadow-lg my-4 rounded-lg p-6 max-w-sm mx-auto"
                        aria-labelledby={`service-${index}-heading`}
                    >
                        <div className="flex justify-center mb-4">
                            <div className="bg-[--bg-color] text-white p-4 border-[--bg-color] border-[0.5px] rounded-full absolute -top-8">
                                {service.icon}
                            </div>
                        </div>
                        <h3 id={`service-${index}-heading`} className="mt-8 text-xl text-center font-semibold text-gray-900 mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-center mt-4">{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Process;
