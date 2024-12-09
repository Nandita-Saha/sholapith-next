// pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/globals.css'; // Import global styles
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
