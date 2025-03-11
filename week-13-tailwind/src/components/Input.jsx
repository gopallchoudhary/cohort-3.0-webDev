import React, { useEffect, useState } from 'react'

const Input = ({ type, placeholder, setDisabled }) => {
    const [birthYear, setBirthYear] = useState("")

    useEffect(() => {
        if (birthYear.length > 3) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [birthYear])

    return (
        <>
            <input type={type} placeholder={placeholder} value={birthYear} onChange={(e) => setBirthYear(e.target.value)} className='bg-[#18395f] px-6 py-2 rounded-md outline-none' />
        </>
    )
}

export default Input