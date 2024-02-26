// app/_app.tsx
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === '/') {
      router.push('/v1/login');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
