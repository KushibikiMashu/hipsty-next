import React from 'react'
import { genreToSlug, slugToGenre, sortByPublishedAt } from 'src/presenters/VideoPresenter'
import GenreService from 'src/infra/GenreService'
import VideoService from 'src/infra/VideoService'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import VideoList from 'src/components/pages/VideoList'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Component: React.FC<Props> = (props) => <VideoList videos={props.videos} />

export const getStaticProps = async (props) => {
  const genre = slugToGenre(props.params.slug)
  const videos = sortByPublishedAt(VideoService.getVideosByGenre(genre), 'desc')

  return { props: { videos } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = GenreService.genresToLinks().map((genre) => genreToSlug(genre))
  const params = slugs.map((slug) => ({ params: { slug } }))

  return { paths: params, fallback: false }
}

Component.displayName = 'CategoryPage'

export default Component
