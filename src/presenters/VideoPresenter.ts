// リソース名にしたいので、genre名を英語の複数形に変換する
// 「リンク生成ロジック」の一種なので、本来はViewやControllerに対するロジック
import { Genre } from '../types/Genre'
import { Videos } from '../types/Video'
import { compareDate } from '../utiles/datetime'
import { GenreModel } from '../infra/DataAccess'

export const genreToSlug = (genre: Genre) => `${genre}s`

export const slugToGenre = (slug: string) => {
  const genre = slug.slice(0, -1) as Genre
  const genres = new GenreModel().findAll()

  if (!genres.includes(genre)) {
    throw new Error('Invalid argument: slug')
  }

  return genre
}

export const sortByPublishedAt = (videos: Videos, orderBy: 'asc' | 'desc' = 'asc') =>
  videos.sort((prev, next) => {
    const compare = compareDate(prev.publishedAt, next.publishedAt)
    return orderBy === 'asc' ? compare : -compare
  })
