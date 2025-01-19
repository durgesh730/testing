import React from 'react';
import img from '../../../assets/coding (2).png';
import img2 from '../../../assets/project (1).png';
import img3 from '../../../assets/technical-support.png';
import img4 from '../../../assets/system-integration.png';

const ProjectProcess = () => {
  return (
    <section className="text-center py-16 pb-20">
      <div className="container mx-auto">
        <header className="mb-8">
          <h2 className="my-2 sm:text-4xl text-2xl font-semibold mb-12">
            Our Approach to Software Development and Project Management
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-[80vw] mx-auto justify-center text-center mt-16">
          <article className="flex flex-col items-center">
            <img
              src={img}
              alt="Strategic planning for aligning software solutions with business goals"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Strategy</h3>
            <p className="text-gray-500 mt-2">
              We create a detailed plan to align the software solution with business goals and user needs, ensuring long-term success.
            </p>
          </article>
          <article className="flex flex-col items-center">
            <img
              src={img2}
              alt="User-centric interface design for enhanced usability"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Design</h3>
            <p className="text-gray-500 mt-2">
              We design intuitive, user-centric interfaces that enhance usability, engagement, and provide a seamless experience.
            </p>
          </article>
          <article className="flex flex-col items-center">
            <img
              src={img3}
              alt="Software development ensuring scalability and security"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Development</h3>
            <p className="text-gray-500 mt-2">
              Our team builds scalable, secure, and high-performing software using industry best practices to ensure success.
            </p>
          </article>
          <article className="flex flex-col items-center">
            <img
              src={img4}
              alt="Quality assurance through rigorous software testing"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Quality Check</h3>
            <p className="text-gray-500 mt-2">
              We rigorously test the software to ensure it is reliable, bug-free, and ready for deployment, providing peace of mind.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProjectProcess;
