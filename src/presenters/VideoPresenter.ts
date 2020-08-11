// リソース名にしたいので、genre名を英語の複数形に変換する
// 「リンク生成ロジック」の一種なので、本来はViewやControllerに対するロジック
import { Genre } from '../types/Genre'
import { Videos } from '../types/Video'
import { compareDate } from '../utiles/datetime'

export const genreToSlug = (genre: string) => `${genre}s`

export const slugToGenre = (slug: string) => slug.slice(0, -1) as Genre

export const sortByPublishedAt = (videos: Videos, orderBy: 'asc' | 'desc' = 'asc') =>
  videos.sort((prev, next) => {
    const compare = compareDate(prev.publishedAt, next.publishedAt)

    return orderBy === 'asc' ? compare : -compare
  })
