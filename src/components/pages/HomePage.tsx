import React from 'react'
import { Videos } from 'src/types/Video'
import VideoList from './VideoList'

type Props = {
  videos: Videos
}

const Component: React.FC<Props> = (props) => <VideoList videos={props.videos} />

Component.displayName = 'HomePage'

export default Component
