import { Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

type JWTParams = {
  token: JWT;
  user: User;
};

type SessionParams = {
  session: Session;
  token: JWT;
};

const jwt = ({ token, user }: JWTParams): JWT => {
  if (user) {
    token._id = user._id;
    token.username = user.username;
    token.email = user.email;
    token.name = user.name;
  }
  return token;
};

const session = ({ session, token }: SessionParams): Session => {
  if (token) {
    session.user.username = token.username;
    session.user.email = token.email;
    session.user.name = token.name;
  }
  return session;
};

const callbacks = { jwt, session };
export default callbacks;
