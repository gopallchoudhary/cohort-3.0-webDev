

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { userAtom, userSelector } from './store/atom/counter'

function App() {

  return (
    <>
      <div>
        <AlterData />
        <UserData />
        <GetData />
      </div>
    </>
  )
}

function UserData() {
  const userData = useRecoilValue(userAtom)
  return (
    <div>
      <h1>{userData.name}</h1>
      <h2>{userData.age}</h2>
      <h3>{userData.userId}</h3>
    </div>
  )
}

function AlterData() {
  const setUserData = useSetRecoilState(userAtom)
  setUserData((prev) => ({
    ...prev,
    name: "Raju"
  }))
}





export default App

