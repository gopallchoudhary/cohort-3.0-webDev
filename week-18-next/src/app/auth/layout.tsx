import { Navbar } from "@/components/Navbar";

export default function AuthLayout({ children }: any) {
    return <div>
        <Navbar />
        {children}
    </div>
}

// this is a sublayout page