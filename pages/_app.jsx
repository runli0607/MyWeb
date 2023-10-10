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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}