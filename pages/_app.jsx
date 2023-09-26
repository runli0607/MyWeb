import '../styles/globals.css';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="viewport-fit=cover,width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/ryanicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}