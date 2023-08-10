import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import FetchingApi from "@/context/FetchingApi";

export const authOptions = {
  session: {
    strategy: "jwt"
  },
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

          if (!result.ok) {
            return null
          } else {
            const data = await result.json()
            const user = { id: "1", name: `${data.nombres} ${data.apellidos}`, email: data.correo, roles: data.rol }
            return user
          }
        }
      })
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }