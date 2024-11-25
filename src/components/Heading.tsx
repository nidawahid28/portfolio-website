import React from 'react';

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-8">
      <p className="border-b-4 inline-block pb-2">{title}</p>
    </div>
  );
};

export default Heading;
