import '../styles/globals.css'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HIPSTY | 日本語ラップ好きのための動画サイト</title>
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
