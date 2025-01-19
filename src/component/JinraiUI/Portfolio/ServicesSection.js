import React from 'react';
import i1 from '../../../assets/ss1.jpg'
import i2 from '../../../assets/ss2.jpg'
import i3 from '../../../assets/ss3.jpg'
import i4 from '../../../assets/ss4.jpg'
import i5 from '../../../assets/ss5.jpg'
import staff from '../../../assets/c3.jpg'
import { FiLayout } from "react-icons/fi";
import { SiXdadevelopers } from "react-icons/si";
import { SiManageiq } from "react-icons/si";
import { FaDeviantart } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

const ServicesSection = () => {
  return (
    <section className="py-16 text-center ">
      <div className="container mx-auto">
        <header className="mb-12">
          <h2 className="sm:text-4xl text-3xl font-semibold">
            <span className="text-[--bg-color]">Services</span> We Provide
          </h2>
          <p className="text-gray-500 mt-4">
            Partner with us for expert solutions, delivering top-notch software and services that meet your business needs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:w-[80vw] w-[90%] m-auto">

          <div className="relative" itemScope itemType="http://schema.org/Service">
            <img
              src={i1}
              alt="Custom Software Development services for business needs"
              className="w-full h-56 object-cover rounded-lg"
              itemProp='image'
            />
            <div className="relative bottom-12 bg-[--bg-color] text-white text-center p-4 mx-6 pb-8 h-64">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full absolute -top-8">
                  <SiXdadevelopers className=' text-black' size={40} />
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <i className="icon-class-for-mechanical-engineering text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold" itemProp='name'>Software Development</h3>
              <p className="text-sm mt-2" itemProp='description'>
                We craft bespoke software solutions that are robust, scalable, and tailored to meet the specific needs of your business, ensuring high performance and user satisfaction.              </p>
            </div>
          </div>

          <div className="relative" itemScope itemType="http://schema.org/Service">
            <img
              src={i2}
              alt="Web and App Development services for cross-platform solutions"
              className="w-full h-56 object-cover rounded-lg"
              itemProp='image'
            />
            <div className="relative bottom-12 bg-[--bg-color] text-white text-center p-4 mx-6 pb-8 h-64">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full absolute -top-8">
                  <SiManageiq className=' text-black' size={40} />
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <i className="icon-class-for-mechanical-engineering text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold" itemProp='name'>Web and App Development</h3>
              <p className="text-sm mt-2" itemProp='description'>
                Our expertise in web and mobile app development delivers high-quality, cross-platform applications that are optimized for performance, accessibility, and user engagement.
              </p>
            </div>
          </div>

          <div className="relative" itemScope itemType="http://schema.org/Service">
            <img
              src={i3}
              alt="Telecom services for enhanced connectivity and growth"
              className="w-full h-56 object-cover rounded-lg"
              itemProp='image'
            />
            <div className="relative bottom-12 bg-[--bg-color] text-white text-center p-4 mx-6 pb-8 h-64">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full absolute -top-8">
                  <FiLayout className=' text-black' size={40} />
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <i className="icon-class-for-mechanical-engineering text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold" itemProp='name'>Telecom</h3>
              <p className="text-sm mt-2" itemProp='description'>
                We offer specialized services in telecom, providing cutting-edge solutions that enhance connectivity, improve operational efficiency, and drive business growth in the telecommunications sector.
              </p>
            </div>
          </div>

          <div className="relative" itemScope itemType="http://schema.org/Service">
            <img
              src={i4}
              alt="Cloud and DevOps services for streamlined development"
              className="w-full h-56 object-cover rounded-lg"
              itemProp='image'
            />
            <div className="relative bottom-12 bg-[--bg-color] text-white text-center p-4 mx-6 pb-8 h-64">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full absolute -top-8">
                  <SiXdadevelopers className=' text-black' size={40} />
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <i className="icon-class-for-mechanical-engineering text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold" itemProp='name'>Cloud and Devops</h3>
              <p className="text-sm mt-2" itemProp='description'>
                Our cloud and DevOps services streamline your development processes, enabling continuous integration, automated deployment, and scalable infrastructure management for faster and more reliable software delivery.
              </p>
            </div>
          </div>

          <div className="relative" itemScope itemType="http://schema.org/Service">
            <img
              src={i5}
              alt="Product Engineering services for innovative solutions"
              className="w-full h-56 object-cover rounded-lg"
              itemProp='image'
            />
            <div className="relative bottom-12 bg-[--bg-color] text-white text-center p-4 mx-6 pb-8 h-64">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full absolute -top-8">
                  <MdEngineering className=' text-black' size={40} />
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <i className="icon-class-for-mechanical-engineering text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold" itemProp='name'>Product Engineering</h3>
              <p className="text-sm mt-2" itemProp='description'>
                We deliver end-to-end product engineering services, from conceptualization to deployment, ensuring your products are innovative, scalable, and aligned with market demands.              </p>
            </div>
          </div>

          <div className="relative" itemScope itemType="http://schema.org/Service">
            <img
              src={staff}
              alt="Staff Augmentation services for skilled professionals"
              className="w-full h-56 object-cover rounded-lg"
              itemProp='image'
            />
            <div className="relative bottom-12 bg-[--bg-color] text-white text-center p-4 mx-6 pb-8 h-64">
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full absolute -top-8">
                  <FaDeviantart className=' text-black' size={40} />
                </div>
              </div>
              <div className="flex justify-center mb-2">
                <i className="icon-class-for-mechanical-engineering text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold" itemProp='name'>Staff Augmentation</h3>
              <p className="text-sm mt-2" itemProp='description'>
                Our staff augmentation services provide you with skilled professionals who seamlessly integrate with your team, helping you meet project demands and achieve your business objectives efficiently.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
