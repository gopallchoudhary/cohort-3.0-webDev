import React from 'react'

const Button = ({ disabled, text }) => {
    return (
        <>
            <button className={` py-2 rounded-md  ${disabled ? "bg-gray-500" : "bg-green-400"}`}>{text}</button>
        </>
    )
}

export default Button