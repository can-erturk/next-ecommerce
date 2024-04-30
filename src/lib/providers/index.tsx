import AuthProvider from './AuthProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: Readonly<ProvidersProps>) {
  return <AuthProvider>{children}</AuthProvider>;
}
