import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import VideoService from 'src/infra/VideoService'
import { Video } from '../../src/types/Video'
import VideoPlayerTemplate from '../../src/components/templates/VideoPlayerTemplate'

type Props = {
  video: Video
}

const Component: React.FC<Props> = (props) => <VideoPlayerTemplate video={props.video} />

type Param = {
  genre: string
  hash: string
}

export const getStaticProps: GetStaticProps = async (props: { params: Param }) => {
  const video = VideoService.getVideoByHash(props.params.hash)

  return { props: { video } }
}

export const getStaticPaths: GetStaticPaths<Param> = async () => {
  const videos = VideoService.getAllVideo()
  const params = videos.map((video) => ({
    params: {
      genre: video.genre,
      hash: video.hash,
    },
  }))

  return {
    paths: params,
    fallback: false,
  }
}

Component.displayName = 'VideoPlayerPage'

export default Component
