import { Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user?: Session['user'] & {
      username?: string | null;
    };
  }

  interface User {
    _id?: string | null;
    username?: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    _id?: string | null;
    username?: string | null;
  }
}
