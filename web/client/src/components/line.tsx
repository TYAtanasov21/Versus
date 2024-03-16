import React from 'react';
interface LineProps{
  color:string;
}
const Line: React.FC<LineProps> = ({color}) => {
    return (
        <svg className="w-full h-1">
          <line x1="0" y1="0" x2="100%" y2="0" stroke={color} strokeWidth="2" />
        </svg>
      );
}

export default Line;