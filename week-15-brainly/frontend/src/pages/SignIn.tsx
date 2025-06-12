import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";


const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()


  //.signin 

  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {

      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, { username, password }, { withCredentials: true })
      const token = response.data?.token
      localStorage.setItem("token", token)
      console.log(response.data);
      alert(response?.data?.message)
      setPassword("")
      setUsername("")
      navigate("/dashboard")

    } catch (error: any) {
      alert(error.response?.data?.message)
      console.error("❌ Signup Error:", error.response?.data?.message || error.message);
    }
  }

  return (
    <form action="" onSubmit={signin}>
      <div className="w-screen h-screen bg-gray-200 flex items-center justify-center">
        <div className="py-4 px-10 w-fit h-fit bg-white rounded-md">
          <p className="font-medium text-2xl text-center mb-2">
            Log In
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-gray-600 text-lg mb-1 mt-2">Username</p>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <p className="text-gray-600 text-lg mb-1">Password</p>
              <Input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mx-auto mt-2  w-full">
              <Button
                variant="primary"
                text="Log In"
                size="md"
                fullWidth={true}
              />

              <p className="text-gray-400 text-sm my-1 mx-3">
                dont have an account? {" "}
                <span className="underline hover:cursor-pointer text-blue-500" onClick={() => navigate('/signup')}>
                  signup here
                </span>
              </p>

            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SignIn