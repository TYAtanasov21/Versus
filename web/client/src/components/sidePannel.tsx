import React, {useState} from 'react';
import Line from './line';
import { FaChevronLeft, FaChevronDown } from "react-icons/fa6";
import CirclePhoto from './circlePhoto';
import Member from './member';

interface SidePannelProps {
    username: string;
}

const SidePannel:React.FC<SidePannelProps> = ({username}) => {
    const [isPinnedExpand, setIsPinnedExpand] = useState(false);
    const [isGroupsExpand, setIsGroupsExpand] = useState(false);
    const [isConnectionsExpand, setIsConnectionExpand] = useState(false);
    return (
    <div className = "lg:basis-1/3 md:basis-1/4 bg-white h-screen outline text-black flex flex-col justify-between ">
        <div>
            <div className = "flex flex-col justify-between">
                <div className = "flex flex-row justify-between">
                    <h1 className = "lg:text-3xl lg:font-extrabold text-gray-500 p-4 md:text-xl md:font-bold font-sans">Pinned</h1>
                    <button 
                    className = "mr-2"
                    onClick = {() => {setIsPinnedExpand(!isPinnedExpand)}}
                    >
                        {isPinnedExpand ? 
                        <FaChevronDown size = '30px'/>
                        : 
                        <FaChevronLeft size = "30px"/>}
                    </button>
                </div>
                <Line color = '#6b7280'/>
                {isPinnedExpand && <Member/>}
                </div>
                <div className = "flex flex-col">
                <div className = "flex flex-row justify-between">
                    <h1 className = "lg:text-3xl lg:font-extrabold text-gray-500 p-4 md:text-xl md:font-bold font-sans">Groups</h1>
                    <button 
                    className = "mr-2"
                    onClick = {() => {setIsGroupsExpand(!isGroupsExpand)}}
                    >
                        {isGroupsExpand ? 
                        <FaChevronDown size = '30px'/>
                        : 
                        <FaChevronLeft size = "30px"/>}
                    </button>
                </div>
                <Line color ="#6b7280"/>
                </div>
                <div className = "flex flex-col">
                <div className = "flex flex-row justify-between">
                    <h1 className = "lg:text-3xl lg:font-extrabold text-gray-500 p-4 md:text-xl md:font-bold">Connections</h1>
                    <button 
                    className = "mr-2"
                    onClick = {() => {setIsConnectionExpand(!isConnectionsExpand)}}
                    >
                        {isConnectionsExpand ? 
                        <FaChevronDown size = '30px'/>
                        : 
                        <FaChevronLeft size = "30px"/>}
                    </button>
                </div>
                <Line color = "#6b7280"/>
                </div>
            </div>
            <div>
                <Line color = "black"/>
                <div className = "flex flex-row justify-start pt-2 pl-2">
                    <CirclePhoto image_url = {require("../assets/Alex-Kazakov.jpg")} size = {40} className = "text-green-400"/>
                    <div className = 'flex flex-col justify-start ml-5 font-sans text-gray-500 '>
                    <h1 className='font-bold'>{username}</h1>
                    <div className = "flex flex-row ">
                    <p className='font-serif font-large'>Status: </p>
                    <p className='text-green-500 pl-1 font-serif font-large'>Online</p>
                    </div>
                    </div>   
                </div>
            </div>
    </div>
    );
}

export default SidePannel;