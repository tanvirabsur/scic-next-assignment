import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

console.log(process.env.GOOGLE_CLIENT_ID);
 const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Email/Password (Credentials)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log(credentials);
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        if (user) {
          return user
        }
        return null
      }
    })
  ],
  
}

const handler = NextAuth(authOptions)
export { authOptions }
export { handler as GET, handler as POST }