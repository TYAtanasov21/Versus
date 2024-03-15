import React from 'react';
import AnimatedTooltipPreview from './animated-toolTip-preview';

interface FooterProps{
    className?: string;
}

const Footer:React.FC<FooterProps> = ({className}) =>{
    return (
    <div className= "flex flex-row bg-sky-900 rounded-t-lg justify-between bottom-0 fixed w-full">
        <div className = "p-10">
            <img src = {require("../assets/versus_logo_white.png")} alt = "logo" width = "100px"/>
        </div>
        <AnimatedTooltipPreview/>
        <div>
            <h1>Join our newsletter!</h1>
            <input></input>
        </div>
    </div>
    );
}

export default Footer;