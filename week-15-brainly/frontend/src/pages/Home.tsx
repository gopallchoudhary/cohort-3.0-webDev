import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Home: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex w-full gap-4 items-center justify-center h-screen'>
                <Button variant='primary' size='lg' text='Sign Up' onClick={() => navigate("/signup")} />
                <Button variant='primary' size='lg' text='Sign In' onClick={() => navigate("/signin")} />
            </div>
        </div>
    )
}

export default Home