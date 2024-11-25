import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-16 py-4 sm:py-6 text-center bg-gray-700 text-white text-sm sm:text-base">
      &copy; {new Date().getFullYear()} Nida | All rights reserved.
    </div>
  );
};

export default Footer;
