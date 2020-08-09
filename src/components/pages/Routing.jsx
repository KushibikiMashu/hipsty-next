import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { channelId } from '../const'
import VideoList from './VideoList'
import VideoPlayerTemplate from '../templates/VideoPlayerTemplate'

export default function Routing(props) {
    const { videos, newVideos } = props
    var main = [],
        MV = [],
        battle = [],
        interview = [],
        otheres = []

    // ジャンルごとに動画を振り分ける。振り分けた動画をVideoListに渡す
    videos.map(video => {
        switch (video.genre) {
            case 'MV':
                MV.push(video)
                break
            case 'battle':
                battle.push(video)
                break
            case 'interview':
                interview.push(video)
                break
            case 'others':
                otheres.push(video)
                break
            default:
                break
        }
    })

    newVideos.map(video => {
        if (video.channelId !== channelId.neetTokyo) {
            main.push(video)
        }
    })
    return (
        <React.Fragment>
            <Route exact path="/" render={() => <VideoList videos={main} />} />
            <Route
                path="/music_video"
                render={() => <VideoList videos={MV} />}
            />
            <Route
                path="/battle"
                render={() => <VideoList videos={battle} />}
            />
            <Route
                path="/interview"
                render={() => <VideoList videos={interview} />}
            />
            <Route
                path="/others"
                render={() => <VideoList videos={otheres} />}
            />
            <Route
                path="/video/:hash"
                render={() => <VideoPlayerTemplate videos={videos} />}
            />
        </React.Fragment>
    )
}

Routing.propTypes = {
    videos: PropTypes.array.isRequired,
    newVideos: PropTypes.array.isRequired
}

// 本文書は、当サイト（○○○○）における個人情報の保護およびその適切な取り扱いについての方針を示したものです。
//
// 当サイトが利用しているアクセス解析ツールに関して
//
// 当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
//
// この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはここをクリックしてください。
//
// 免責事項
//
// 当サイトに掲載する情報は記事公表時点の正しいものを提供するよう努めております。ただし、提供している情報、リンク先などにより、いかなる損失や損害などの被害が発生しても当サイトでは責任を負いかねますので、ご了承ください。
//
//
// 初出掲載：○○年○月○日
