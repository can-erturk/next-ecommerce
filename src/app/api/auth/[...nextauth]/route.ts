import { NextRequest, NextResponse } from 'next/server';
import NextAuth, { AuthOptions } from 'next-auth';
import providers from './helpers/providers';
import callbacks from './helpers/callbacks';

const options: AuthOptions = {
  providers,
  callbacks,
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler: any = NextAuth(options);

export { handler as GET, handler as POST };
