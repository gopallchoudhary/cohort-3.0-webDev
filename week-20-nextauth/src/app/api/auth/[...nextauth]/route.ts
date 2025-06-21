import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

console.log(process.env.NEXTAUTH_SECRET);
const handler = NextAuth({
    providers: [
        CredentialsProvider({

            name: "Email",

            credentials: {
                username: { label: "Username", type: "text", placeholder: "gopal_ch12" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const username = credentials?.username
                const password = credentials?.password
                console.log(username);
                console.log(password);



                const user = {
                    name: "gopal",
                    id: "1",
                    username: "gopal_ch12"
                }

                if (user) {
                    return user
                } else {
                    return null
                }

            }
        }),

        GoogleProvider({
            clientId: "hardcoded",
            clientSecret: "xyz"
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
})

// export { handler as GET, handler as POST }
export const GET = handler
export const POST = handler


