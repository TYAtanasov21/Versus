import React, {ChangeEvent, useEffect, useState} from 'react'
import Line from '../components/line';
import { IoSend } from "react-icons/io5";
import SidePanel from '../components/sidePanel';
import CirclePhoto from '../components/circlePhoto';
import { useLocation } from "react-router-dom";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import axios from 'axios';

const MainApp: React.FC = () =>{
    const [isChatting, setIsChatting] = useState(true);
    const location = useLocation();
    const user = location.state.user;

    const [messageDraft, setMessageDraft] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        setMessageDraft(event.target.value);
        console.log(messageDraft);
    };

    const handleSendClick = async () => {
        const tempMessage = messageDraft;
        setMessageDraft('');
        const response = await axios.post("http://localhost:3001/ML/checkMessage", {message: tempMessage});
        console.log(response.data, tempMessage);

        if(response.data.isBullying == false){
            if (messageDraft.trim() !== '') {
                setMessages([...messages, tempMessage]);
                setMessageDraft('');
            }
        }
        else setMessages([...messages, "This message has been flagged as cyberbullying."]);
        }


    useEffect(()=>{
        console.log(user.username, typeof (user.username));
    });
    return (  
        <div className = "flex flex-row bg-gradient-to-b from-sky-700 to-sky-500">
                <SidePanel username={user.username}/>
            {!isChatting && 
            <div className = "flex flex-col bg-white mx-auto my-auto p-44 rounded-xl items-center font-sans text-gray-500 font-bold">
                    <h1>No Chats</h1>
                    <p>Select a conversation to start</p>
            </div>}
            {isChatting && 
            <div className = "flex flex-col bg-gradient-to-b from-sky-300 to-indigo-400 w-full ml-0.5 justify-between">
                <div className = "flex flex-col justify-start p-3">
                    <div className = "flex flex-row items-center mb-1">
                        <CirclePhoto image_url = {require('../assets/Ivan-Dochev.jpg')} size = {50} className = "mr-4 text-green-400"/>
                    <h1 className='font-serif font-bold text-xl'>Ivan Dochev</h1>
                    </div>
                    <Line color = "black"/>
                        <div>
                            {messages.map((message, index) => (
                                <div key={index} className="flex flex-col text-end mx-auto mr-0 w-fit">
                                    {message != "This message has been flagged as cyberbullying." ?
                                    <div className="flex flex-row bg-blue-600 p-2 rounded-2xl mb-1 font-sans text-white px-4 items-center">
                                        {message}
                                        <IoCheckmarkDoneOutline className='ml-3'/>
                                    </div>
                                    :
                                    <div className="flex flex-row bg-red-600 p-2 rounded-2xl mb-1 font-sans text-white px-4 items-center">
                                        {message}
                                        <IoCheckmarkDoneOutline className='ml-3'/>
                                    </div>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className = "p-4 flex flex-row justify-center">
                        <input onChange={handleInputChange} className = "bg-gray-200 w-11/12 py-2 outline-none rounded-xl px-3" placeholder='Type a message...' value={messageDraft}></input>
                        <button onClick={handleSendClick}className = "ml-7 rounded-2xl bg-sky-400 px-4 py-2"><IoSend color='white' size = "20px"/></button>
                        </div>
                    </div>
            </div>}
            
        </div>
    );
}

export default MainApp;