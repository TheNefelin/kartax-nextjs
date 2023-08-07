import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import FetchingApi from "@/utils/fetchingApi"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        const fetchingApi = new FetchingApi()
        const res = await fetchingApi.post_login(credentials.username, credentials.password)
    
        console.log("-- NextAuth -------")
        if (res.ok) {
          const data = await res.json()
          console.log(data.access_token)
          await prueba(data.access_token)
          return "FUNCIONA"
          //return credentials
        } else {
          console.log("NULL")
          return null
        }
      }

    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: "666",
  debug: "development",
}

export default NextAuth(authOptions)

const prueba = async (access_token) => {
  const fetchingApi = new FetchingApi()
  const res = await fetchingApi.get_token(access_token)
  const data = await res.json()
  console.log(data)
}