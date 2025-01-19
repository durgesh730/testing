import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetQuoteSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[--bg-color] text-white text-center w-[90vw] m-auto" aria-labelledby="get-quote-section">
      <div className="container mx-auto ">
        {/* Heading section */}
        <h3 className="text-sm font-medium mb-2 items-center">
          <span className="inline-block border-t-2 border-white w-10 mx-auto"></span>
          <span id="get-quote-section">Get A Quote</span>
          <span className="inline-block border-t-2 border-white w-10 mx-auto"></span>
        </h3>
        <h2 className="sm:text-4xl text-3xl font-semibold my-4 md:mx-44 mx-4">
          Feel Free to Contact Us for Business Consulting 
        </h2>

        {/* CTA Button with improved accessibility */}
        <button 
          onClick={() => navigate("/contact")} 
          className="mt-8 px-8 py-4 bg-black text-white font-medium rounded-full" 
          aria-label="Contact Jinrai Technologies for a custom business quote"
        >
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default GetQuoteSection;
