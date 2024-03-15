import React from "react";
import TopBar from "../components/topBar";
const LandingPage = () => {
    return (
        <div className = "bg-gradient-to-b from-sky-900 to-sky-800 h-screen">
                <TopBar/>
                <div className = "mainContent flex flex-row pt-24">
                    <div className = "text-pretty">
                        <h1>Building a kinder online community.</h1>
                    </div>

                </div> 
        </div>
    );
}

export default LandingPage;