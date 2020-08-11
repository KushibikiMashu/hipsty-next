import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import VideoService from 'src/infra/VideoService'
import { Video } from 'src/types/Video'
import { genreToSlug } from 'src/presenters/VideoPresenter'
import { VideoPage } from 'src/components/pages'

type Props = {
  video: Video
}

const Component: React.FC<Props> = (props) => <VideoPage video={props.video} />

type Param = {
  slug: string
  hash: string
}

export const getStaticProps: GetStaticProps = async (props: { params: Param }) => {
  const video = VideoService.getVideoByHash(props.params.hash)

  return { props: { video } }
}

export const getStaticPaths: GetStaticPaths<Param> = async () => {
  const videos = VideoService.getAllVideo()
  const paths = videos.map((video) => ({
    params: {
      slug: genreToSlug(video.genre),
      hash: video.hash,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

Component.displayName = 'VideoPlayerPage'

export default Component
