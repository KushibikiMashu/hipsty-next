const pathToJson = (filename) => {
  return location.origin + '/json/' + filename + '.json'
}

const newList = location.origin + '/api/video/new'
const videoList = location.origin + '/api/video/list'

const channelId = { neetTokyo: 63 }

const CONST = {
  baseUrl: location.origin,
  videoUrl: location.origin + '/video',
  newList: location.origin + '/api/video/new',
  videoList: location.origin + '/api/video/list',
  banner: 'https://s3-ap-northeast-1.amazonaws.com/hipsty/hipsty.jpg',
  youtubeEnbedUrl: 'https://www.youtube.com/embed/',

  title: 'HIPSTY',
  siteTitle: 'HIPSTY | 日本語ラップ好きのための動画サイト',
  description: '最新の日本語ラップ動画が見つかるサイト。MCバトルもMVもラッパーのインタビューも最新の動画をチェック！',
  channelId: { neetTokyo: 63 },

  pathToJson: (filename) => {
    return location.origin + '/json/' + filename + '.json'
  },
}

export { pathToJson, newList, videoList, channelId, CONST }
