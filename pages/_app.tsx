import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createClient } from "wagmi";

const client = createClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}

export default MyApp;
