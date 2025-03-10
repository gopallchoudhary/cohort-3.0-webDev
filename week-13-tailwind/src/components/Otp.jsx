import React, { useRef, useState } from 'react'

const Otp = ({ }) => {

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()

    return (
        <div className='flex gap-2 mx-auto'>
            <SubOtp reference={ref1} onDone={() => ref2.current.focus()} />
            <SubOtp reference={ref2} onDone={() => ref3.current.focus()} onBack={() => ref1.current.focus()}/>
            <SubOtp reference={ref3} onDone={() => ref4.current.focus()} onBack={() => ref2.current.focus()}/>
            <SubOtp reference={ref4} onDone={() => ref5.current.focus()} onBack={() => ref3.current.focus()}/>
            <SubOtp reference={ref5} onDone={() => ref6.current.focus()} onBack={() => ref4.current.focus()}/>
            <SubOtp reference={ref6} onBack={() => ref5.current.focus()}/>
        </div>
    )
}

function SubOtp({ reference, onDone }) {
    const [inputBoxValue, setInputBoxValue] = useState("")
    return (
        <div>
            <input value={inputBoxValue} type="text" ref={reference} onChange={(e) => {
                const val = e.target.value
                const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
                if (val == "") {
                    // go back logic
                } else if (num.includes(val)) {
                    onDone()
                    setInputBoxValue(val)
                } else {

                }
            }} className='w-[40px] h-[50px] rounded-md outline-none bg-gray-600 px-4' />
        </div>
    )
}
export default Otp