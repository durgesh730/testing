import React from 'react';

const MapSection = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center">
        <h2 className="my-2 sm:text-4xl text-3xl mb-3 font-bold">
          Find Us on Google Maps
        </h2>
        <p className="text-gray-600 mb-6">We are located in Noida, UP. Visit us for more details.</p>
      </div>
      <div className="flex justify-center">
        <iframe
          title="Google Maps Location of Jinrai Technologies"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.4272440014092!2d77.315659!3d28.586956999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzEzLjEiTiA3N8KwMTgnNTYuNCJF!5e0!3m2!1sen!2sin!4v1724349894619!5m2!1sen!2sin"
          width="900"
          height="450"
          loading="lazy"
          aria-label="Jinrai Technologies Office Location on Google Maps"
        />
      </div>
    </div>
  );
};

export default MapSection;
