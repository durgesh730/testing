import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="pt-10 pb-16 bg-[#f4f4f4] md:px-20 px-12" aria-labelledby="why-choose-us">
      <div className="container m-auto text-center">
        <header className="my-4 py-4">
          <h2 id="why-choose-us" className="my-2 md:text-4xl text-3xl text-[--bg-color] font-bold">
            Why Choose Us
          </h2>
          <div className='flex justify-center'>
            <div className='w-32 border-b-4 border-[--bg-color]'></div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
            aria-labelledby="high-quality-services"
          >
            <h3 id="high-quality-services" className="font-semibold text-lg">
              01 — High-Quality Services
            </h3>
            <p className="text-gray-600 text-center mt-2 mb-4">
              Utilizing our skilled workforce, we consistently deliver top-notch services that help our clients achieve their business objectives in an ever-evolving world.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 1
            }}
            aria-labelledby="dedicated-support"
          >
            <h3 id="dedicated-support" className="font-semibold text-lg">
              02 — Dedicated 24/7 Support
            </h3>
            <p className="text-gray-600 text-center mt-2 mb-4">
              We are fully committed to providing exceptional services and solutions, understanding market challenges, and delivering maximum value to our clients.
            </p>
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
            aria-labelledby="proven-track-record"
          >
            <h3 id="proven-track-record" className="font-semibold text-lg">
              03 — Proven Track Record
            </h3>
            <p className="text-gray-600 text-center mt-2 mb-4">
              Our proven track record showcases our ability to deliver projects on time and ensure successful completion, exceeding client expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 1
            }}
            aria-labelledby="excellence-driven-culture"
          >
            <h3 id="excellence-driven-culture" className="font-semibold text-lg">
              04 — Excellence-Driven Culture
            </h3>
            <p className="text-gray-600 text-center mt-2 mb-4">
              We are an organization that refuses to settle for mediocrity, consistently striving to deliver outstanding services in all that we do.
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
            aria-labelledby="innovation-and-optimization"
          >
            <h3 id="innovation-and-optimization" className="font-semibold text-lg">
              05 — Innovation and Optimization
            </h3>
            <p className="text-gray-600 text-center mt-2 mb-4">
              Alongside our quality services, we offer innovative ideas for automation and optimization to enhance client operations wherever possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.7,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
              duration: 1
            }}
            aria-labelledby="competitive-pricing"
          >
            <h3 id="competitive-pricing" className="font-semibold text-lg">
              06 — Competitive Pricing
            </h3>
            <p className="text-gray-600 text-center mt-2 mb-4">
              We offer highly competitive pricing for our services, delivering exceptional quality without compromising on cost.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
