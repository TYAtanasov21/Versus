import React from "react";
const TopBar = () => {
    return (
        <div className = "flex flex-col justify-between">
            <img src = {require('../assets/versus_logo_white.png')} alt = "logo" width = '75px'/>
        </div> 
    );
}

export default TopBar;