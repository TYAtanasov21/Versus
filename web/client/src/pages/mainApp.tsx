import React from 'react'
import Line from '../components/line';
import { FaChevronLeft } from "react-icons/fa6";
const MainApp: React.FC = () =>{
    return (
        <div className = "flex flex-row">
            <div className = "basis-1/4 bg-white h-screen rounded-t-lg">
                <div className = "flex flex-col">
                    <div className = "flex flex-row justify-between">
                        <h1 className = "lg:text-3xl lg:font-extrabold text-gray-500 p-4 md:text-xl md:font-bold">Pinned</h1>
                        <button className = "mr-2">
                            <FaChevronLeft size = "30px"/>
                        </button>
                    </div>
                    <Line/>
                </div>
                <div className = "flex flex-col">
                    <div className = "flex flex-row justify-between">
                        <h1 className = "lg:text-3xl lg:font-extrabold text-gray-500 p-4 md:text-xl md:font-bold">Groups</h1>
                        <button className = "mr-2">
                            <FaChevronLeft size = "30px"/>
                        </button>
                    </div>
                    <Line/>
                </div>
                <div className = "flex flex-col">
                    <div className = "flex flex-row justify-between">
                        <h1 className = "lg:text-3xl lg:font-extrabold text-gray-500 p-4 md:text-xl md:font-bold">Connections</h1>
                        <button className = "mr-2">
                            <FaChevronLeft size = "30px"/>
                        </button>
                    </div>
                    <Line/>
                </div>
            </div>
            <div className=''>

            </div>
        </div>
    );
}   

export default MainApp;