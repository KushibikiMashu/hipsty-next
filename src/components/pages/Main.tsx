import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import MainDummyTemplate from '../templates/MainDummyTemplate'
import VideoCardDummy from '../organisms/VideoCardDummy'
import { CONST } from '../const'
import { videos } from 'src/data/videos'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: null,
      newVideos: null,
    }
  }

  // コンポーネントがマウントする前に動画情報のJSONを読み込む
  /* eslint-disable-next-line camelcase */
  UNSAFE_componentWillMount() {
    // if (this.state.videos === null) {
    //   fetch(CONST.pathToJson('main')).end((err, res) => {
    //     this.loadedJson(err, res)
    //   })
    // }
    this.loadedJson(videos)
  }

  // 読み込んだ全ての動画情報を配列でvideosに格納
  loadedJson(videos) {
    this.setState({
      videos: videos,
      newVideos: videos.slice(0, 100),
    })
  }

  render() {
    const { videos, newVideos } = this.state
    // state.videosがnullの間はDummyを表示する
    if (!videos) {
      const dummyVideos = []
      for (let i = 0; i < 10; i++) {
        dummyVideos.push(<VideoCardDummy key={i} />)
      }
      return <MainDummyTemplate title={CONST.title} videos={dummyVideos} />
    }

    return <MainTemplate title={CONST.title} videos={videos} newVideos={newVideos} />
  }
}
