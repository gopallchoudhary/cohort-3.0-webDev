"use client"

import { Input } from '@repo/ui/input'
import { useRouter } from 'next/navigation';
import { useState } from 'react';



export default function Home() {
  const router = useRouter()
  const [input, setInput] = useState(Number)
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
    }}>
      <div style={{
        display: "flex",
        gap: "5px",
        height: "40px"
      }}>
        <Input type='text' placeholder='Room id' onChange={(e) => {
          setInput(Number(e.target.value))
        }} />
        <button onClick={() => router.push(`/chat/${input}`)}>Join Room</button>
      </div>
    </div>
  );
}
