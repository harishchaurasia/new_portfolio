// src/components/Grids.tsx
import React from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Index'), {
  ssr: false,
});

const Grids: React.FC = () => {
  return (
    <div className="grid-background flex flex-col items-center text-center">
      {/* <h1 className="font-aloe text-white text-9xl font-bold text-gradient mt-48">Hi. I'm Harish.</h1> */}
      <Scene />
      {/* <p className="font-bruce mt-16 text-2xl text-gray-200">I love building shit. 🛠️⚙️</p>s */}
      {/* <p className="font-bruce mt-2 text-2xl text-gray-200">Eat. Sleep. Build & Repeat.♾️</p>    */}

    </div>  
  );
};

export default Grids;
