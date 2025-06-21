import Image from "next/image";

export default function Home() {
  return (
    <div>
      hey there <br />
      <Button >sign up</Button>
      <br />
      <Button>sign in</Button>
    </div>
  );
}

function Button({ children }: any) {
  return <button className="bg-blue-500 px-2 py-3 my-4 rounded-md text-white">
    {children}
  </button>
}