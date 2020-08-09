import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HIPSTY | 日本語ラップ好きのための動画サイト</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
