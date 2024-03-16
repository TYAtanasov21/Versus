import React, {useEffect, useState} from 'react'
import Line from '../components/line';
import { FaChevronLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import SidePannel from '../components/sidePannel';
import CirclePhoto from '../components/circlePhoto';
import { useLocation } from "react-router-dom";
import axios from "axios";

const MainApp: React.FC = () =>{
    const [isChatting, setIsChatting] = useState(true);
    const location = useLocation();
    const [user, setUser] = useState(location.state.user);
    const photoURL = `https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`;
    useEffect(()=>{
        console.log(user.username, typeof (user.username));
    });
    return (  
        <div className = "flex flex-row">
                <SidePannel username={user.username}/>
            {!isChatting && 
            <div className = "flex flex-col bg-white mx-auto my-auto p-44 rounded-xl items-center font-sans text-gray-500 font-bold">
                    <h1>No Chats</h1>
                    <p>Select a conversation to start</p>
            </div>}
            {isChatting && 
            <div className = "flex flex-col bg-white w-full ml-0.5 justify-between">
                <div className = "flex flex-col justify-start p-3">
                    <div className = "flex flex-row items-center mb-1">
                        <CirclePhoto image_url = {photoURL} size = {50} className = "mr-4 text-green-400"/>
                    <h1 className='font-sans font-bold'>{user.username}</h1>
                    </div>
                    <Line color = "black"/>
                </div>
                <div className = "p-4">
                    <input className = "bg-gray-200 w-11/12 py-2 outline-none rounded-xl px-3" placeholder='Type a message...'></input>
                    <button className = "ml-7 rounded-2xl bg-sky-400 px-4 py-2" type = "submit"><FaArrowRight/></button>
                </div>
            </div>}
        </div>
    );
}

export default MainApp;