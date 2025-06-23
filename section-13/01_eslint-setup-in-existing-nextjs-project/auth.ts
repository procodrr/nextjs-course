import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectDB } from "./lib/connectDB";
import User from "./models/userModel";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  session: { maxAge: 3600 },
  callbacks: {
    async signIn({ user }) {
      try {
        await connectDB();
        const exitingUser = await User.findOne({ email: user.email });
        if (!exitingUser) {
          await User.create(user);
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    session({ session, token }) {
      session.user.id = token.sub as string;
      return session;
    },
  },
});
