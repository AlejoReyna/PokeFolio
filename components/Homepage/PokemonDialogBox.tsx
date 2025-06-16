import React from 'react';

interface PokemonDialogBoxProps {
  className?: string;
}

export const PokemonDialogBox: React.FC<PokemonDialogBoxProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 400 160"
      className={`w-full h-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Main dialog box background */}
      <rect
        x="8"
        y="8"
        width="384"
        height="144"
        rx="4"
        ry="4"
        fill="white"
        stroke="black"
        strokeWidth="1"
        shapeRendering="crispEdges"
      />
      
      {/* Down arrow in bottom right corner */}
      <polygon 
        points="360,125 370,125 365,135" 
        fill="black"
        shapeRendering="crispEdges"
      />
    </svg>
  );
}; 