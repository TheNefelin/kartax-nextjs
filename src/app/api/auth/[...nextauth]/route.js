import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import FetchingApi from "@/context/FetchingApi";

export const authOptions = {
  session: {
    strategy: "jwt"
  },
  secret: process.env.CREDENTIALS_SECRET,
  providers: [
    CredentialsProvider({
        name: "credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const fetchingApi = new FetchingApi()
          const result = await fetchingApi.post_login(credentials.username, credentials.password)
          const data = await result.json()

          if (result.ok && data) {
            const user = { 
              id: "1", name: `${data.nombres} ${data.apellidos} (${data.rol})`, 
              email: data.correo, 
              image: "https://kartax-api-py.vercel.app/static/imgKartax/idle.png",
            }
            return user
          } else {
            return null
          }
        }
      })
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }