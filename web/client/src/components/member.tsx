import React from 'react'
import CirclePhoto from './circlePhoto';
import Line from './line';
import { AiFillPushpin } from "react-icons/ai";
import { AiOutlinePushpin } from "react-icons/ai";


const Member = () => {
    return (
        <div className='flex flex-col'>
            <div className = "flex flex-row justify-between p-2">
                <div className = "flex flex-row justify-start items-center=">
                <CirclePhoto image_url = {require("../assets/Alex-Kazakov.jpg")} size = {40} className = "text-green-400"/>
                    <div className = "flex flex-col justify-start pl-2">
                        <h1 className = "text-black font-sans font-bold text-md">Teodor Madjarov</h1>
                        <p className = "font-serif text-green-500">Online</p>
                    </div>
                </div>
                <div>
                <button><AiFillPushpin/></button>
            </div>
            </div>
            <Line color = '#6b7280'/>
        </div>
    );
}

export default Member;