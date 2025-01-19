import React from "react";
import home from '../../../assets/world-amico.png';

const Team = () => {
  return (
    <section className='mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 items-center md:px-12 px-6 pt-12 pb-14 bg-white'>
      <div className="m-auto pl-9">
        <div className="flex flex-col py-8 justify-between lg:text-left">
          <div className="flex flex-col lg:mx-4 justify-center">
            <div className='text-blue-900 mb-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className='fill-current'>
                <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
              </svg>
            </div>
            <h3 className="text-2xl  text-[--bg-color] font-bold">We <span className='font-black text-[--bg-color] '>Build</span></h3>
            <div>
              <p className='my-3 text-gray-600 '>
                With expertise in software analysis and design and a deep understanding of the latest IT trends and solutions, we provide customized recommendations and strategies to help you improve your operations, reduce costs, and increase efficiency. Our team is equipped to build the technology solutions you need to scale your business.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:mx-4 justify-center mt-4">
            <div className='text-blue-900 mb-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className='fill-current'>
                <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[--bg-color] ">We <span className='font-black text-[--bg-color] '>Collaborate</span></h3>
            <div>
              <p className='my-3 text-gray-600 '>
                We can collaborate with your existing tech team to scale existing software applications or design customized software applications that suit your everyday needs and simplify various processes. Our collaborative approach ensures that your software solutions align with your business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <figure className="w-[80%] mx-auto" role="none">
        <img className='rounded-md' src={home} alt="Jinrai Tech - Global Software Development and IT Solutions" />
      </figure>
    </section>
  );
};

export default Team;
