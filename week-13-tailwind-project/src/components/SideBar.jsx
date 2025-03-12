import React, { useContext } from 'react'
import { SideBarContext } from '../context/SideBarContext'
import { SideBarIcon } from './icons/SideBarIcon';
import { HomeIcon } from './icons/HomeIcon';

const SideBar = () => {
    const { sidebarOpen, setSidebarOpen } = useContext(SideBarContext)
    const toggeSidebar = () => {
        setSidebarOpen(prev => !prev)
    }

    return (
        <div className={`bg-pink-100 hidden md:block rounded-md h-96 transition-all duration-500 ease-in-out ${sidebarOpen ? "w-40" : "w-8"}`}>
            <div>
                <div className='cursor-pointer hover:bg-slate-200' onClick={toggeSidebar}>
                    <SideBarIcon />
                </div>
                <div className='mt-2'>
                    {sidebarOpen ? <div className='flex gap-2'><HomeIcon /> <p>Home</p></div> : <HomeIcon />}
                </div>
            </div>

        </div>
    )


}

export default SideBar