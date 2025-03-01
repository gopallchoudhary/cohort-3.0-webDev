import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registrationData, setRegistrationData] = useState([])


    const submitRegistration = async (e) => {
        e.preventDefault()
        const newUser = { firstName, lastName, email, password }
        setRegistrationData((prev) => [...prev, newUser])

        try {
            const response = await axios.post('http://localhost:5001/api/v1/user/signup', newUser)

            const { success, message } = response.data

            if (success) {
                console.log("User registration successfull");
            } else {
                console.log(message);

            }
        } catch (error) {
            console.error("Login error: ", error);

        }


        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
    }


    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
                <form
                    onSubmit={(e) => {
                        submitRegistration(e)
                    }}
                    className="flex items-center justify-center flex-col"
                >
                    <input
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border-2  border-emerald-500 px-5 py-4 rounded-full bg-transparent placeholder:text-gray-400 outline-none my-2"
                        type="text"
                        name='firstName'
                        placeholder="Enter your firstName"
                    />

                    <input

                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="border-2  border-emerald-500 px-5 py-4 rounded-full bg-transparent placeholder:text-gray-400 outline-none my-2"
                        type="text"
                        name='lastName'
                        placeholder="Enter your lastName"
                    />

                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2  border-emerald-500 px-5 py-4 rounded-full bg-transparent placeholder:text-gray-400 outline-none"
                        type="email"
                        name='email'
                        placeholder="Enter your email"
                    />
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-2 mt-4 border-emerald-500 px-5 py-4 rounded-full bg-transparent placeholder:text-gray-400 outline-none"
                        type="password"
                        name='password'
                        placeholder="Enter your password"
                    />
                    <button className="border-2 mt-4 w-full border-emerald-500 px-5 py-4 rounded-full bg-emerald-500 placeholder:text-gray-400 outline-none">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register