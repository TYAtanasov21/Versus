import React from "react";
import Footer from "../components/footer";
import TopBar from "../components/topBar";
const LandingPage: React.FC = () => {

    const handleChatNow = () => {

    }

    return (
        <div className = "bg-gradient-to-b from-sky-900 to-sky-800 pl-16">
                <TopBar/>
                <div className="flex flex-row pl-20 pr-20 justify-between items-center"> 
                    <div>
                        <h1 className = "text-4xl font-extrabold text-white">Building A Kinder <br/> Online Community.</h1>
                        <p className = "text-white pt-5 pb-10 leading-5 text-start text-lg">In a world of online negativity, be part of the solution,<br/> be part of a community that teenagers respectful dialogue.</p>
                        <div>
                        <button
                        className = "bg-sky-600 px-9 py-2 text-gray-100 rounded-3xl font-extrabold"
                        onClick = {handleChatNow}
                        >
                            CHAT NOW
                        </button>

                        <button
                        className = "px-9 py-2 text-indigo-300 rounded-3xl ml-10 outline font-extrabold"
                        onClick = {handleChatNow}
                        >
                            VERSUS AI
                        </button>
                    </div>
                </div>
                    <div className="ml-5 md:ml-10 lg:ml-20"> 
                        <img src = {require('../assets/message_icon.png')} alt = "message img" width = "300px"/>
                    </div>
                </div>
                <div className  = "flex flex-row pl-20 pr-20 justify-between items-center pt-16">

                    <div className = 'image ml-4'>
                        <img src = {require("../assets/AI_with_brain.png")} alt = "AI" width = "300px"/>
                    </div>

                    <div className = 'flex flex-col mr-16'>
                    <h1 className = "text-4xl font-extrabold text-white text-center">With A Safe Built-In<br/> AI</h1>
                    <p className = "text-white pt-5 pb-10 leading-5 text-center text-lg">Our AI tirelessly works behind the scenes,<br/> filtering out hateful words and harmful<br/> content, so you can enjoy genuine human<br/>connection.</p>
                    <button
                    className = "bg-sky-700 px-5 py-2 mt-1 text-gray-100 rounded-3xl font-extrabold items-center"
                    onClick = {handleChatNow}
                    >
                        TRY NOW
                    </button>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
    );
}

export default LandingPage;