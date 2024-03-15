import React from 'react';
import AnimatedTooltipPreview from './animated-toolTip-preview';

interface FooterProps{
    className?: string;
}

const Footer:React.FC<FooterProps> = ({className}) =>{
    return (
    <div className= "flex flex-row mr-16 bg-sky-900 rounded-t-lg justify-between">
        <div className = "p-10">
            <img src = {require("../assets/versus_logo_white.png")} alt = "logo" width = "100px"/>
        </div>
        <AnimatedTooltipPreview/>
    </div>
    );
}

export default Footer;