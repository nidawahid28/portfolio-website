import React from 'react'
import Image from 'next/image';

interface PropsType {
    title: string;
    description: string;
    img: string;
    tags: string[];
}

const Card: React.FC<PropsType> = ({ title, description, img, tags }) => {
  return (
    <div className='border border-gray-400 w-[300px] sm:w-[350px] h-[400px] flex flex-col justify-between' data-aos="zoom-in-up">
      <div>
        <Image
          className='w-full h-auto'
          src={img}
          width={350}
          height={200} 
          alt={title}
        />
      </div>

      <div className='p-4 space-y-4 flex-grow flex flex-col justify-between'>
        <div className='text-2xl font-semibold'>{title}</div>
        <div className='text-sm'>{description}</div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((el) => (
            <div className='tags px-2 py-1 bg-gray-200 text-gray-700 rounded' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card;
