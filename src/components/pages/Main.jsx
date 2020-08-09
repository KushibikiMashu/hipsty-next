import React from 'react'
import request from 'superagent'
import MainTemplate from '../templates/MainTemplate'
import MainDummyTemplate from '../templates/MainDummyTemplate'
import VideoCardDummy from '../organisms/VideoCardDummy'
import { CONST } from '../const'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: null,
            newVideos: null
        }
    }

    // コンポーネントがマウントする前に動画情報のJSONを読み込む
    componentWillMount() {
        if (this.state.videos === null) {
            request.get(CONST.pathToJson('main')).end((err, res) => {
                this.loadedJson(err, res)
            })
        }
    }

    // 読み込んだ全ての動画情報を配列でvideosに格納
    loadedJson(err, res) {
        if (err) {
            return
        }
        this.setState({
            videos: res.body,
            newVideos: res.body.slice(0, 100)
        })
    }

    render() {
        const { videos, newVideos } = this.state
        // state.videosがnullの間はDummyを表示する
        if (!videos) {
            let dummyVideos = []
            for (let i = 0; i < 10; i++) {
                dummyVideos.push(<VideoCardDummy key={i} />)
            }
            return (
                <MainDummyTemplate title={CONST.title} videos={dummyVideos} />
            )
        }

        return (
            <MainTemplate
                title={CONST.title}
                videos={videos}
                newVideos={newVideos}
            />
        )
    }
}
