// src/components/Grids.tsx
import React from 'react';

interface GridsProps {
  width: string;
  height: string;
}

const Grids: React.FC<GridsProps> = ({ width, height }) => {
  return <div className="grid-background" style={{ width, height }}></div>;
};

export default Grids;
