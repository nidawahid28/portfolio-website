import React from 'react';

const About: React.FC = () => {
  return (
    <div id="about" className="container mx-auto px-4 pt-16 sm:pt-24 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white" data-aos="zoom-in-up">
            About Me
          </h2>
          <p className="text-gray-300 pt-4 text-base sm:text-lg lg:text-xl" data-aos="zoom-in-up">
            I am a student at GIAIC, pursuing a course in Artificial Intelligence, Web 3.0, and the Metaverse.
            Driven by a passion for technology, I am committed to learning new skills to stay updated with the latest innovations.
            <br />
            My academic journey includes qualifications shown on the right.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 text-gray-400 text-2xl sm:text-3xl lg:text-4xl gap-4" data-aos="zoom-in-up">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">B.com</h2>
              <h2 data-aos="zoom-in-up">FSc</h2>
              <h2 data-aos="zoom-in-up">SSC</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">One Year Post Graduate Certificate in Accounting</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

