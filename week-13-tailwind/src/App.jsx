import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Otp from './components/Otp'

function App() {
  const [disabled, setDisabled] = useState(true)



  return (
    <div className='h-screen bg-[#00274E]'>
      <div className='flex flex-col items-center justify-center  '>
        <div className='text-white flex flex-col px-6 py-8 gap-20 text-3xl mt-20'>
          <p><span>💻</span><span className='text-[#5ec0ce]'>Webinar</span>.gg</p>
          <p className='font-medium'>Verify Your Age</p>
        </div>

        <div className='flex flex-col gap-4 mt-8'>
          <p className='text-[#738fb2] text-lg'>Please confirm your birth year. This data will not be stored</p>
          <div className='flex  flex-col gap-8 text-white w-4/5 mx-auto'>
            <Input type={"text"} placeholder={"Enter your birth year"} setDisabled={setDisabled} />
            <Button disabled={disabled} text={'Sign Up'} />
            <Otp />
            <Button text={'Verify'} disabled={disabled} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
