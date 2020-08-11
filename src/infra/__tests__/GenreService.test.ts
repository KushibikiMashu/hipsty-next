import GenreService from '../GenreService'

describe('GenreService', () => {
  describe('eliminateExcludedGenres', () => {
    test('全てのGenreからexcludedGenreを除外したGenreの配列を返す', () => {
      const actual = GenreService.eliminateExcludedGenres()

      const expected = ['music-video', 'battle', 'interview', 'other']

      expect(actual).toEqual(expected)
      expect(actual).not.toContain('radio')
    })
  })
})
