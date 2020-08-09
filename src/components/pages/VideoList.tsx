import React from 'react'
import PropTypes from 'prop-types'
import VideoCard from '../organisms/VideoCard'
import VideoListTemplate from '../templates/VideoListTemplate'
import MaxVideoListTemplate from '../templates/MaxVideoListTemplate'

export default class VideoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMoreVideos: true,
      loadedVideosCount: 20, // デフォルトの動画表示数
    }
  }

  // 「次の20件を表示」ボタンをクリックすると、新たに10個の動画を表示する
  loadVideos(e, max) {
    const loadedVideosCount = this.state.loadedVideosCount
    if (loadedVideosCount + 20 < max) {
      this.setState({
        loadedVideosCount: loadedVideosCount + 20,
      })
      return false
    }

    this.setState({
      hasMoreVideos: false,
      loadedVideosCount: max,
    })
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  // loadVideos関数が呼ばれると、再度render関数が作動する
  render() {
    const { hasMoreVideos, loadedVideosCount } = this.state
    const { videos } = this.props
    const items = []

    for (let i = 0; i < loadedVideosCount; i++) {
      // 親コンポーネントから指定されたジャンルの動画のみ追加する
      items.push(<VideoCard key={i} video={videos[i]} />)
    }

    if (hasMoreVideos) {
      return (
        <VideoListTemplate
          videos={items}
          onClick={(e) => {
            this.loadVideos(e, videos.length)
          }}
        />
      )
    }

    return <MaxVideoListTemplate videos={items} />
  }
}

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
}
