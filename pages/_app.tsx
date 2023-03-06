import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout title="The Best Deals & Products">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
