import { Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface JWTParams {
  token: JWT;
  user: User;
}

interface SessionParams {
  session: Session;
  token: JWT;
}

const jwt = async ({ token, user }: JWTParams) => {
  if (user) {
    token._id = user._id;
    token.username = user.username;
    token.email = user.email;
    token.name = user.name;
  }
  return token;
};

const session = ({ session, token }: SessionParams) => {
  if (token) {
    session.user.username = token.username;
    session.user.email = token.email;
    session.user.name = token.name;
  }
  return session;
};

type callbacksType = {
  jwt: ({ token, user }: JWTParams) => Promise<JWT>;
  session: ({ session, token }: SessionParams) => Session;
};

const callbacks: callbacksType = { jwt, session };

export default callbacks;
