import React from 'react';

const Skills: React.FC = () => {
  return (
    <div id="skills" className="container mx-auto px-4 pt-16 md:pt-32">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        
        <div data-aos="zoom-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Technologies I Work With
          </h2>
          <p className="text-gray-300 pt-2 text-base sm:text-lg md:text-xl leading-relaxed">
            I have a strong foundation in web development, focusing on HTML, CSS, and JavaScript. My experience includes building dynamic, user-friendly applications using frameworks like Next.js and efficiently styling them with Tailwind CSS. With a commitment to continuous learning, I stay current with new technologies to broaden my skills and bring value to each project.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-gray-400 text-2xl sm:text-3xl md:text-4xl">
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">JavaScript</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
