import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import Footer from '../src/components/Footer';
import NavBar from '../src/components/NavBar';
import '../src/styles/globals.css';

config.autoAddCss = false;

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
