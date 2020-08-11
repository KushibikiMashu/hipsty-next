import * as VideoPresenter from '../VideoPresenter'
import { Videos } from '../../types/Video'

describe('VideoPresenter', () => {
  // Slug名は「genre名 + s」であるので、双方向に変換する
  const genre = 'battle'
  const slug = 'battles'

  describe('genreToSlug', () => {
    test('genre名を与えたとき、slug（リソース名）にして返す', () => {
      const actual = VideoPresenter.genreToSlug(genre)

      expect(actual).toBe(slug)
    })
  })

  describe('slugToGenre', () => {
    test('slug（リソース名）を与えたとき、genre名を返す', () => {
      const actual = VideoPresenter.slugToGenre(slug)

      expect(actual).toBe(genre)
    })

    test('slug（リソース名）以外の文字列を与えたとき、例外を発生させる', () => {
      const str = 'IamNotASlug'

      expect(() => {
        VideoPresenter.slugToGenre(str)
      }).toThrow('Invalid argument: slug')
    })
  })

  describe('sortByPublishedAt', () => {
    // sortByPublishedAt第一引数の型を騙すために、type annotationで型を決めている
    const earlier = {
      published_at: '2015-01-01 00:00:00',
    } as unknown
    const later = {
      published_at: '2017-12-30 00:00:00',
    } as unknown

    let videos
    beforeEach(() => {
      videos = [earlier, later] as Videos
    })

    test('投稿日の異なるvideosを与えたとき、投稿日の降順にして返す', () => {
      const actual = VideoPresenter.sortByPublishedAt(videos)

      expect(actual).toEqual([later, earlier])
    })

    test('投稿日の異なるvideosを与えてdescを指定したとき、投稿日の昇順にして返す', () => {
      const actual = VideoPresenter.sortByPublishedAt(videos, 'desc')

      expect(actual).toEqual([earlier, later])
    })
  })
})
