import React from 'react';
import logo from '../../assets/logo.jpeg';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[--bg-color] shadow dark:bg-gray-900 sm:pt-32 pt-8 px-8" role="contentinfo">
      <div className="w-full max-w-screen-xl mx-auto py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          
          {/* Logo and Company Name */}
          <div onClick={() => navigate('/')} className="flex flex-wrap justify-center items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse" role="link" aria-label="Homepage">
            <img src={logo} className="h-8 w-8 rounded-lg" alt="Jinrai Technologies Logo" />
            <span className="self-center text-sm text-white font-semibold whitespace-nowrap dark:text-white">
              Jinrai Technologies Private Limited
            </span>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="md:flex md:flex-wrap md:items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li className="text-center">
                <a onClick={() => navigate('/about')} className="hover:underline me-4 md:me-6 text-white text-center cursor-pointer" aria-label="About Us Page">About</a>
              </li>
              <li className="text-center">
                <a onClick={() => navigate('/portfolio')} className="hover:underline me-4 md:me-6 text-white text-center cursor-pointer" aria-label="Portfolio Page">Portfolio</a>
              </li>

              <li className="md:pt-0 sm:mt-8">
                <div onClick={() => navigate('/contact')} className="text-white cursor-pointer text-center hover:underline " aria-label="Contact Us Page">Contact with Us</div>
                <div className="text-white text-xl flex flex-row md:justify-around justify-center md:gap-0 gap-4 mt-3">
                  <a href="https://linkedin.com/company/jinraitech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <FaLinkedin className="cursor-pointer" />
                  </a>
                  <a href="https://facebook.com/jinraitech" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                    <FaFacebook className="cursor-pointer" />
                  </a>
                  <a href="https://twitter.com/Jinraitech" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                    <FaSquareTwitter className="cursor-pointer" />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Separator */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Copyright Information */}
        <div className="md:flex md:justify-center text-sm text-white text-center dark:text-gray-400">
          <div className="pr-1">© 2024</div>
          <span className="underline">Jinrai Technologies Private Limited.</span>
          <div className="pl-1"> All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
