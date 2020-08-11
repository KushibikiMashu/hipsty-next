import React from 'react'
import { Video } from 'src/types/Video'
import VideoPlayerTemplate from '../templates/VideoPlayerTemplate'

type Props = {
  video: Video
}

const Component: React.FC<Props> = (props) => <VideoPlayerTemplate video={props.video} />

Component.displayName = 'VideoPage'

export default Component
