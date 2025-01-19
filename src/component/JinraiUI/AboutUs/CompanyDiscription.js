import React from 'react';

const CompanyDescription = () => {
  return (
    <div className='md:mx-32 mx-8 mb-12'>
      <div className="my-4 py-4">
        <h1 className="my-2 md:text-4xl text-3xl text-[--bg-color] font-bold text-center">About Jinrai Technologies</h1>

        <div className='flex justify-center'>
          <div className='w-80 border-b-4 border-[--bg-color]'></div>
        </div>

        <p className="text-center mt-6 mb-4 md:mx-20">
          Jinrai Technologies is a global service and consulting company with years of experience, supporting major clients in IT and Telecom industries worldwide.
        </p>

        <p className="mt-6 mb-4 md:mx-20">
          Our skilled resources and consultants, located across India, excel in Software Development, Website Development, and Application Development. We specialize in supporting Telecom clients with Greenfield Implementations, System Integrations, Software Upgrades, Network Migrations, Transformation Programs, and Managed Services. With extensive experience in delivering quality services to clients, particularly in Europe and Asia, we provide solutions that help businesses thrive.
        </p>

        <p className="mt-6 mb-4 md:mx-20">
          At Jinrai Technologies, we pride ourselves on delivering customized software solutions that transform user experiences. Our industry expertise, strong leadership, and innovative approach ensure we meet the evolving needs of our clients. We are committed to enhancing the quality of software solutions and technologies within the IT and Telecom industry. Through close client partnerships, unique methodologies, and subject matter expertise, we deliver economically sound business value to our customers.
        </p>
      </div>
    </div>
  );
};

export default CompanyDescription;
