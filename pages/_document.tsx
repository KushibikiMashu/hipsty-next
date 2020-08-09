import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head lang="ja">
          <meta name="Content-Type" content="text/html; charset=UTF-8" />
          <link rel="canonical" href="https://hipsty.net/" />
          <meta property="og:site_name" content="HIPSTY | 日本語ラップ好きのための動画サイト" />
          <meta property="og:title" content="HIPSTY" />
          <meta
            property="og:description"
            content="MCバトルも新曲もラッパーのインタビューも！最新の日本語ラップ動画が見つかるサイト"
          />
          <meta property="og:url" content="https://hipsty.net/" />
          <meta property="og:image" content="https://s3-ap-northeast-1.amazonaws.com/hipsty/hipsty.jpg" />
          <meta property="og:type" content="website" />
          <meta name="twitter:site" content="@Panda_Program" />
          <meta name="twitter:title" content="HIPSTY | 日本語ラップ好きのための動画サイト" />
          <meta
            name="twitter:description"
            content="MCバトルも新曲もラッパーのインタビューも！最新の日本語ラップ動画が見つかるサイト"
          />
          <meta name="twitter:image" content="https://s3-ap-northeast-1.amazonaws.com/hipsty/hipsty.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
