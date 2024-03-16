import React from 'react';

interface CirclePhotoProps {
  image_url: string;
  size?: number;
  className?: string;
}

const CirclePhoto: React.FC<CirclePhotoProps> = ({ image_url, size = 59, className }) => {
  return (
    <div
      className = {`rounded-full outline ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        overflow: 'hidden',
      }}
    >
      <img src={image_url} alt="Profile" className="object-cover w-full h-full" />
    </div>
  );
};

export default CirclePhoto;
