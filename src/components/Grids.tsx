// src/components/Grids.tsx
import React from 'react';
import RoundedImg from '../components/ImageComponent';

const Grids: React.FC = () => {
  return(
  <div className="grid-background">
    <div className='block'>
      <RoundedImg 
          src="/harish_headshot_black.png"
          alt="My Image"
          width="315px"
          height="315px"
          top="123px"
          left="123px"
        />
        <h1 className='font-imperfect text-white text-4xl'>
          Hello there...
        </h1>
    </div>
  </div>)
};

export default Grids;
