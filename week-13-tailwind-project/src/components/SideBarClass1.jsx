import React from 'react'

const SideBarClass1 = () => {
    return (
        <div className='flex'>
            <div className='bg-white  h-screen w-8 md:w-96  transition-all duration-500 ease-in-out '>
                Sidebar
            </div>
            <div className='bg-green-400 flex-1 h-screen'>
                Content
            </div>
        </div>
    )
}

export default SideBarClass1