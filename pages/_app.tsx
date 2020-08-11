import Head from 'next/head'
import Layout from 'src/components/Layout'

const MyApp = ({ Component, pageProps }) => (
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
