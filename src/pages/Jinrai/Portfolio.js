import React from "react";
import H1 from "../../assets/n3.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GetQuoteSection from "../../component/JinraiUI/Portfolio/GetQuoteSection ";
import ProjectProcess from "../../component/JinraiUI/Portfolio/ProjectProcess";
import ServicesSection from "../../component/JinraiUI/Portfolio/ServicesSection";
import Navbar from "../../component/JinraiUI/Navbar";
import Footer from "../../component/JinraiUI/Footer";

const Portfolio = () => {
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
        "name": "portfolio",
        "item": "https://jinraitech.com/portfolio"
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

      <section className="relative flex flex-col items-center justify-center md:h-[80vh] h-[60vh] bg-[#f4f4f4]">
        <img
          src={H1}
          alt="Background of an innovative agency providing expert project management and technology solutions"
          className="absolute inset-0 object-cover md:h-[70vh] h-[50vh]  w-full"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-[#852D2D] opacity-30 md:h-[70vh] h-[50vh] "></div>

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
            className="md:text-7xl text-4xl font-bold leading-tight mb-8"
          >
            Portfolio
          </motion.h1>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.7 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex justify-center items-center space-x-4 px-6 py-2 md:mx-64"
          >
            <Link to="/" className="py-2 transition text-[16px]">
              Home
            </Link>
            <span className=" py-2 transition">{`->`}</span>
            <Link to="/portfolio" className="py-2 transition text-[16px]">
              Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-100 pb-20">
        <div className="container mx-auto text-center">
          <h2 className="text-gray-600 text-sm font-semibold uppercase mb-2">
            Our Process
          </h2>
          <h2 className="my-2 md:text-4xl text-3xl text-[--bg-color] font-bold ">
            Process We Follow
          </h2>

          <div className="flex justify-center">
            <div className="w-44 border-b-4 border-[--bg-color] mb-8"></div>
          </div>
          <p className="text-gray-500 max-w-3xl mx-auto mb-12">
            Our software development process ensures a thorough approach to
            planning, designing, developing, testing, deploying, and maintaining
            quality software systems
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative">
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-1 bg-gray-300"></div>

            <div className="relative bg-white rounded-full p-8 shadow-lg w-64 h-64 flex flex-col items-center justify-center z-10">
              <div className="absolute top-12 left-44 -translate-y-12 bg-[--bg-color] text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                01
              </div>
              <h3 className="text-xl font-semibold mb-4">Research Project</h3>
              <p className="text-gray-500 text-sm">
                We thoroughly understand project requirements and research the
                best approaches, technologies, and methods aligned with your
                goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white rounded-full p-8 shadow-lg w-64 h-64 flex flex-col items-center justify-center z-10">
              <div className="absolute top-8 left-36 -translate-y-12 bg-[--bg-color] text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                02
              </div>
              <h3 className="text-xl font-semibold mb-4">Evaluate Plans</h3>
              <p className="text-gray-500 text-sm">
                We carefully design and evaluate plans that are robust,
                scalable, and tailored to your needs, focusing on efficiency and
                innovation.{" "}
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white rounded-full p-8 shadow-lg w-64 h-64 flex flex-col items-center justify-center z-10">
              <div className="absolute top-4  -translate-y-12 bg-[--bg-color] text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                03
              </div>
              <h3 className="text-xl font-semibold mb-4">Best Results</h3>
              <p className="text-gray-500 text-sm">
                We integrate our research and plans to deliver a product that
                exceeds expectations in performance, usability, and reliability.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProjectProcess />
      <GetQuoteSection />
      <ServicesSection />
      <Footer/>
    </>
  );
};

export default Portfolio;
