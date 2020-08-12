import VideoService from '../VideoService'
import { videos } from 'src/data/videos'

describe('VideoService', () => {
  describe('getAllVideo', () => {
    test('Videoとvideoに関連するサムネイル画像、チャンネルのオブジェクトの配列を返す', () => {
      const actual = VideoService.getAllVideo()

      // ファイルに格納している1件目の動画のデータでテストする
      const expected = {
        id: '1',
        channelId: '1',
        title: 'R-指定 UMB 3連覇達成＆Creepy Nuts本格始動 コメント',
        hash: 'FztA3MuLBwo',
        genre: 'music-video',
        publishedAt: '2015-01-01 09:43:09',
        thumbnail: 'https://i.ytimg.com/vi/FztA3MuLBwo/mqdefault.jpg',
        channelTitle: 'Creepy Nuts (R-指定 ＆ DJ 松永)',
        channelHash: 'UCEc1YzMOSKKtJD7H-q71HgQ',
        channelVideoCount: '54',
        channelPublishedAt: '2014-11-25 11:42:08',
      }

      expect(actual[0]).toEqual(expected)
    })

    test('videosを取得したとき、配列の長さはVideoのレコード数と同じである', () => {
      const expected = videos.length
      const actual = VideoService.getAllVideo()

      expect(actual.length).toEqual(expected)
    })
  })

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
