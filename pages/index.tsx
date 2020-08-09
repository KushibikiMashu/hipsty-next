import React from 'react'
import { videos } from '../src/data/videos'
import VideoList from '../src/components/pages/VideoList'

type Props = {
  videos: {
    title: string
    hash: string
    thumbnail: string
    channelTitle: string
    publishedAt: string
  }[]
}

const Component: React.FC<Props> = (props) => <VideoList videos={props.videos} />

type ContainerProps = unknown

const Container: React.FC<ContainerProps> = () => {
  // Mapperが必要

  return <Component videos={videos} />
}

Container.displayName = 'IndexPage'

export default Container
