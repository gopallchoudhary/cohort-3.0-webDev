import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios, { AxiosResponse } from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


interface res extends AxiosResponse {
  messagae: string
}


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signed, setSigned] = useState(false);

  const navigate = useNavigate()


  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(username);
    console.log(password);
    const data = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, { username, password })
    console.log(data.data.message);

  }
  return (
    <form action="" onSubmit={signup}>
      <div className="w-screen h-screen bg-gray-200 flex items-center justify-center">
        <div className="py-4 px-10 w-fit h-fit bg-white rounded-md">
          <p className="font-medium text-2xl text-center mb-2">
            {signed ? "Login" : "Sign Up"}{" "}
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
                text={`${signed ? "Login" : "Sign Up"}`}
                size="md"
                fullWidth={true}
              />
              <p className="text-gray-400 text-sm my-1 mx-3">
                {signed ? "Dont have an account? " : "Already signed up? "}
                <span className="underline hover:cursor-pointer text-blue-500" onClick={() => navigate('/signin')}>
                  {signed ? "Signup here" : "Login here"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
