import React from 'react';
import Navbar from './Navbar';

const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-cover bg-[url('/profileimage.png')]"
      style={{ backgroundSize: '25%', backgroundPosition: 'left 200px top 200px' }}
    >
      <Navbar />
      <div className="container mx-auto px-4 grid lg:grid-cols-2 h-[calc(100vh-60px)] items-center">
        
        <div className="hidden lg:block"></div>

      
        <div className="flex justify-center lg:justify-start items-center text-center lg:text-left">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white space-y-2 sm:space-y-3">
            <p data-aos="zoom-in-up">Hi! I am</p>
            <p data-aos="zoom-in-up">Nida Wahid Baig</p>
            <p data-aos="zoom-in-up">Web Developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;





