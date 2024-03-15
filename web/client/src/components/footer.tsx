import React from 'react';
import AnimatedTooltipPreview from './animated-toolTip-preview';
interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <div className={`flex flex-row bg-sky-900 rounded-t-lg justify-between mr-16 ${className}`}>
            <div className="p-10">
                <img src={require("../assets/versus_logo_white.png")} alt="logo" width="100px" />
            </div>
            <AnimatedTooltipPreview />
            <div className="flex flex-col justify-center items-center mr-4">
                <h1 className="text-2xl font-extrabold text-white pb-2">Join our newsletter!</h1>
                <div className = "text-center items-center">
                <input className="p-2 bg-white rounded w-64 text-center" type="text" placeholder="Enter your email" />
                <button className = "bg-indigo-300 py-1 px-4 ml-2 rounded-xl items-center font-extrabold text-white">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;
