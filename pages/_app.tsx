import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../src/components/Layout'

const MyApp = ({ Component, pageProps }) => (
  // TODO video/:hash はレイアウトを変える？
  <>
    <Head>
      <title>HIPSTY | 日本語ラップ好きのための動画サイト</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default MyApp
