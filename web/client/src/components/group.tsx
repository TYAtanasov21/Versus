import React from 'react'
import CirclePhoto from './circlePhoto';
import Line from './line';
import { AiOutlinePushpin } from "react-icons/ai";
import { LuSend } from "react-icons/lu";

interface GroupProps{
    group_name: string;
    count_of_users: number;
}

const Group: React.FC<GroupProps> = ({group_name, count_of_users,}) => {
    return (
        <div className='flex flex-col'>
            <div className = "flex flex-row justify-between p-2">
                <div className = "flex flex-row justify-start items-center">
                <CirclePhoto image_url = {require("../assets/Apple_logo.png")} size = {40} className = "text-green-400"/>
                    <div className = "flex flex-col justify-start pl-2">
                        <h1 className = "text-black font-sans font-bold text-md">{group_name}</h1>
                        <p className = "font-serif">{`${count_of_users} Members`}</p>
                    </div>
                </div>
                <div className = "flex flex-row items-center justify-center">
                    <button
                    className = "mr-0.5">
                    <AiOutlinePushpin size = "33px"/></button>
                    <button><LuSend size = "33px"/></button>
                </div>
            </div>
            <Line color = '#6b7280'/>
        </div>
    );
}

export default Group;