import React from 'react';
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="container mx-auto px-4 pt-16 sm:pt-24 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
        
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white" data-aos="zoom-in-up">Contact Us</h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl" data-aos="zoom-in-up">
            Feel free to reach out by dropping me a line, giving me a call, or sending a message through the contact form.
          </p>
          
          <div className="flex gap-3 items-center text-gray-300 text-lg" data-aos="zoom-in-up">
            <FiMail size={24} /> wahidnida761@gmail.com
          </div>

          <div className="flex gap-3 items-center text-gray-300 text-lg" data-aos="zoom-in-up">
            <BsTelephone size={24} /> 0341000000
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name" className="text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              className="h-[40px] bg-transparent border border-gray-400 px-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email" className="text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="h-[40px] bg-transparent border border-gray-400 px-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="message" className="text-gray-300">Message</label>
            <textarea
              id="message"
              rows={6}
              className="bg-transparent border border-gray-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none"
            ></textarea>
          </div>
          
          <button className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors" data-aos="zoom-in-up">
            Send
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
