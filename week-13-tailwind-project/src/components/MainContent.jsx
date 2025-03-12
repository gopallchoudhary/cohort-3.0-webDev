import React from 'react'

const MainContent = () => {
    return (
        <div className='w-full'>
            <div className='h-52 bg-black hidden md:block'></div>
            <div className='grid grid-cols-11 gap-4 p-6'>

                <div className='md:col-span-2 col-span-11 h-72 rounded-2xl bg-red-200  shadow-lg md:-translate-y-24 hidden md:block'>

                </div>

                <div className='md:col-span-6 col-span-11 h-72 bg-green-500 rounded-2xl shadow-lg'>

                </div>

                <div className='md:col-span-3 col-span-11 h-72 bg-yellow-300 rounded-2xl shadow-lg'>

                </div>

            </div>
        </div>
    )
}

export default MainContent