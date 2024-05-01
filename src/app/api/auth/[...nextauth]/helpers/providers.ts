import CredentialsProvider, {
  CredentialsConfig,
} from 'next-auth/providers/credentials';
import authorize from './authorize';

const credentials: CredentialsConfig = CredentialsProvider({
  name: 'credentials',
  credentials: {},
  authorize,
});

export default [credentials];
