import type { NextAuthOptions, Profile, User } from "next-auth";
import CoinbaseProvider from "next-auth/providers/coinbase";
import { Account } from "viem";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CoinbaseProvider({
      clientId: process.env.COINBASE_CLIENT_ID,
      clientSecret: process.env.COINBASE_CLIENT_SECRET
    })
  ],
};
