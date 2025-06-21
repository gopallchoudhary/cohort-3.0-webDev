"use client"
import { getServerSession } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession()
  // const {data: session, status} = useSession()
  
  
  return (
    <div>
      {/* {status === 'authenticated' && <button onClick={() => signOut()}> Logout </button>}
      {status === 'unauthenticated' && <button onClick={() => signIn()}> Log in </button>} */}
      {JSON.stringify(session)}
    </div>
  );
}



