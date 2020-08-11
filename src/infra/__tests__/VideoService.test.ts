import VideoService from '../VideoService'

describe('VideoService', () => {
  describe('getVideoByHash', () => {
    test('Videoのhash（FztA3MuLBwo）を渡したとき、同じhashのvideoを返す', () => {
      const hash = 'FztA3MuLBwo'
      const actual = VideoService.getVideoByHash(hash)

      expect(actual.title).toEqual('R-指定 UMB 3連覇達成＆Creepy Nuts本格始動 コメント')
      expect(actual.hash).toEqual(hash)
    })

    test('存在しないhash（IamInvalidHash）を渡したとき、例外を発生させる', () => {
      const hash = 'IamInvalidHash'

      expect(() => {
        VideoService.getVideoByHash(hash)
      }).toThrow(`Invalid hash: ${hash}`)
    })
  })

  describe('getVideosByGenre', () => {
    test('ジャンルにbattleを渡したとき、genreがbattleの動画のみの配列を返す', () => {
      const genre = 'battle'
      const videos = VideoService.getVideosByGenre(genre)
      const genres = videos.map((video) => video.genre)
      const set = new Set(genres)

      expect(set.size).toBe(1)
      expect(set.has(genre)).toBeTruthy()
    })

    test('ジャンルにotherを渡したとき、genreがradioとotherの動画のみの配列を返す', () => {
      const genre = 'other'
      const videos = VideoService.getVideosByGenre(genre)
      const genres = videos.map((video) => video.genre)
      const set = new Set(genres)

      expect(set.size).toBe(2)
      expect(set.has(genre)).toBeTruthy()
      expect(set.has('radio')).toBeTruthy()
    })
  })
})
