import React from 'react'
import CirclePhoto from './circlePhoto';
import Line from './line';
import { AiFillPushpin } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import { AiOutlinePushpin } from "react-icons/ai";

interface MemberProps {
    name : string;
    image_url: string;
    isConnection: boolean;
}

const Member: React.FC <MemberProps> = ({name, image_url, isConnection}) => {
    return (
        <div className='flex flex-col'>
            <div className = "flex flex-row justify-between p-2">
                <div className = "flex flex-row justify-start items-center">
                <CirclePhoto image_url = {image_url} size = {40} className = "text-green-400"/>
                    <div className = "flex flex-col justify-start pl-2">
                        <h1 className = "text-black font-sans font-bold text-md">{name}</h1>
                        <p className = "font-serif text-green-500">Online</p>
                    </div>
                </div>
                <div className = "flex flex-row items-center justify-center">
                    <button
                    className = "mr-0.5"
                    >
                        {isConnection ? <AiOutlinePushpin size = "33px"/> : <AiFillPushpin size = "33px"/>}
                    </button>
                    <button><LuSend size = "33px"/></button>
                </div>
            </div>
            <Line color = '#6b7280'/>
        </div>
    );
}

export default Member;