import React from 'react'
import { genreToSlug, slugToGenre, sortByPublishedAt } from 'src/presenters/VideoPresenter'
import GenreService from 'src/infra/GenreService'
import VideoService from 'src/infra/VideoService'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Videos } from 'src/types/Video'
import { VideosPage } from 'src/components/pages'

type Props = {
  videos: Videos
}

const Component: React.FC<Props> = (props) => <VideosPage videos={props.videos} />

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (props) => {
  const genre = slugToGenre(props.params.slug)
  const videos = sortByPublishedAt(VideoService.getVideosByGenre(genre), 'desc')

  return { props: { videos } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = GenreService.eliminateExcludedGenres().map((genre) => genreToSlug(genre))
  const params = slugs.map((slug) => ({ params: { slug } }))

  return { paths: params, fallback: false }
}

Component.displayName = 'CategoryPage'

export default Component
