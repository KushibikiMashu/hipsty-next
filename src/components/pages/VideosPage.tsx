import React from 'react'
import { Videos } from '../../types/Video'
import VideoList from './VideoList'

type Props = {
  videos: Videos
}

const Component: React.FC<Props> = (props) => <VideoList videos={props.videos} />

Component.displayName = 'VideosPage'

export default Component
