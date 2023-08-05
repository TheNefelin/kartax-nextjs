import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        console.log("-- NextAuth -------")
        if (credentials.username == "nefelin") {
          console.log("SI")
          console.log(credentials)
          return credentials
        } else {
          console.log("NO")
          return null
        }
      }
    })
  ],
  // session: {
  //   strategy: "jwt"
  // },
  secret: "666",
  debug: "development",
}

export default NextAuth(authOptions)