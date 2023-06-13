import '@/styles/globals.css';
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { AppContext } from '@/components/AppContext';

export default function App({ Component, pageProps }) {
  return(
    <AppContext>
  <Component {...pageProps} />
  </AppContext>
  );
}
