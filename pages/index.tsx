import React from 'react'
import VideoService from 'src/infra/VideoService'
import { Videos } from 'src/types/Video'
import { GetStaticProps } from 'next'
import { sortByPublishedAt } from 'src/presenters/VideoPresenter'
import { HomePage } from 'src/components/pages'

type Props = {
  videos: Videos
}

const Component: React.FC<Props> = (props) => <HomePage videos={props.videos} />

export const getStaticProps: GetStaticProps<Props> = async () => {
  const videos = sortByPublishedAt(VideoService.getAllVideo(), 'desc')

  return { props: { videos } }
}

Component.displayName = 'IndexPage'

export default Component
