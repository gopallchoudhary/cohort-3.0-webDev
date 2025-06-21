import LabelledInput from '@/components/LabelledInput'
import React from 'react'

const page = () => {
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <div>
                        <div className="px-10">
                            <div className="text-3xl font-extrabold text-black">
                                Sign up
                            </div>
                        </div>
                        <div className="pt-2">
                            <LabelledInput label='username' placeholder='enter your name' type='text' />
                            <LabelledInput label='password' placeholder='enter your password' type='password' />
                            <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign up</button>
                        </div>
                    </div>
                </a>
            </div>
        </div>

    )
}

export default page