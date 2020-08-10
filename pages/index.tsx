import React from 'react'
import VideoList from '../src/components/pages/VideoList'
import VideoService from 'src/infra/VideoService'
import { Videos } from '../src/types/Video'

type Props = {
  videos: Videos
}

const Component: React.FC<Props> = (props) => <VideoList videos={props.videos} />

type ContainerProps = unknown

const Container: React.FC<ContainerProps> = () => {
  const videos = VideoService.getAllVideo()

  return <Component videos={videos} />
}

Container.displayName = 'IndexPage'

export default Container
