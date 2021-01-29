import { AppProps } from 'next/dist/next-server/lib/router/router';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
