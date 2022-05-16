import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <Head>
        <link rel="icon" type="image/x-icon" href="/icons/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
    </>
  );
}

export default MyApp;
