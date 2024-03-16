import React, {useState} from 'react'
import Line from '../components/line';
import { FaChevronLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const MainApp: React.FC = () =>{
    const [isChatting, setIsChatting] = useState(false);
    return (
        <div className = "flex flex-row">
            <div className = "basis-1/4 bg-white h-screen rounded-t-lg outline text-black">
                <div className = "flex flex-col">
                    <div className = "flex flex-row justify-between">
                        <h1 className = "lg:text-3xl lg:font-extrabold text-gray-500 p-4 md:text-xl md:font-bold font-sans">Pinned</h1>
                        <button className = "mr-2">
                            <FaChevronLeft size = "30px"/>
                        </button>
                    </div>
                    <Line color = '#6b7280'/>
                </div>
                <div className = "flex flex-col">
                    <div className = "flex flex-row justify-between">
                        <h1 className = "lg:text-3xl lg:font-extrabold text-gray-500 p-4 md:text-xl md:font-bold font-sans">Groups</h1>
                        <button className = "mr-2">
                            <FaChevronLeft size = "30px"/>
                        </button>
                    </div>
                    <Line color ="#6b7280"/>
                </div>
                <div className = "flex flex-col">
                    <div className = "flex flex-row justify-between">
                        <h1 className = "lg:text-3xl lg:font-extrabold text-gray-500 p-4 md:text-xl md:font-bold">Connections</h1>
                        <button className = "mr-2">
                            <FaChevronLeft size = "30px"/>
                        </button>
                    </div>
                    <Line color = "#6b7280"/>
                </div>
            </div>
            {!isChatting && 
            <div className = "flex flex-col bg-white mx-auto my-auto p-44 rounded-xl items-center font-sans text-gray-500 font-bold">
                    <h1>No Chats</h1>
                    <p>Select a conversation to start</p>
            </div>}
            {isChatting && 
            <div className = "flex flex-col bg-white w-full rounded-t-3xl ml-1.5 justify-between">
                <div className = "flex flex-col justify-start p-3">
                    <div className = "flex flex-row">
                    <h1>Status</h1>
                    <h1>Name</h1>
                    </div>
                    <Line color = "black"/>
                </div>
                <div className = "p-4">
                    <input className = "bg-gray-200 w-11/12 py-2 outline-none rounded-xl px-3" placeholder='Type a message...'></input>
                    <button className = "ml-7 rounded-2xl bg-sky-400 px-4 py-2"><FaArrowRight/></button>
                </div>
            </div>}
        </div>
    );
}   

export default MainApp;