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
        // এখানে DB থেকে check করবে
        if (
          credentials.email === "test@gmail.com" &&
          credentials.password === "123456"
        ) {
          return { id: "1", name: "Test User", email: "test@gmail.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: "/auth/login",   // Custom Login Page
    // error: "/auth/error",    // Optional
    // newUser: "/auth/register" // Registration Page
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { authOptions }
export { handler as GET, handler as POST }