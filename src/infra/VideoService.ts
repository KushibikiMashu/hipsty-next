import { ChannelModel, VideoModel, VideoThumbnailModel } from './DataAccess'
import { Video, Videos } from '../types/Video'
import { ChannelSchema } from '../types/Channel'
import { Genre } from '../types/Genre'
import { excludeGenre } from './GenreService'

class VideoService {
  constructor(
    private videoModel: VideoModel,
    private videoThumbnailModel: VideoThumbnailModel,
    private channelModel: ChannelModel
  ) {}

  getAllVideo = (): Videos => {
    const videos = this.videoModel.findAll()
    const videoThumbnails = this.videoThumbnailModel.findAll()

    if (!this.videoExists() && videos.length !== videoThumbnails.length) {
      throw new Error('The number of Video and VideoThumbnail is incorrect.')
    }

    const channelMap = this.createChannelMap()

    return videos.map((video, i) => {
      const thumbnail = videoThumbnails[i]

      if (!channelMap.has(video.channel_id)) {
        return
      }

      const channel = channelMap.get(video.channel_id)

      return {
        // Video
        id: video.id,
        channelId: video.channel_id,
        title: video.title,
        hash: video.hash,
        genre: video.genre,
        publishedAt: video.published_at,

        // Thumbnail
        thumbnail: thumbnail.medium,

        // Channel
        channelTitle: channel.title,
        channelHash: channel.hash,
        channelVideoCount: channel.video_count,
        channelPublishedAt: channel.published_at,
      }
    })
  }

  private videoExists = (): boolean => this.videoModel.findAll().length > 0

  private createChannelMap = (): Map<string, ChannelSchema> => {
    const channels = this.channelModel.findAll()
    const ids = channels.map((channel) => channel.id)
    const map = new Map()

    for (let i = 0; i < ids.length; i++) {
      const channel = channels[i]
      map.set(channel.id, channel)
    }

    return map
  }

  getVideoByHash = (hash: string): Video => {
    const videos = this.getAllVideo()
    const video = videos.find((video) => video.hash === hash)

    if (!video) {
      throw new Error()
    }

    return video
  }

  getVideosByGenre = (genre: Genre): Videos => {
    const videos = this.getAllVideo()

    // navigationにない動画のジャンルはotherにまとめる
    if (genre === 'other') {
      return videos.filter((video) => video.genre === excludeGenre || video.genre === genre)
    }

    return videos.filter((video) => video.genre === genre)
  }
}

const service = new VideoService(new VideoModel(), new VideoThumbnailModel(), new ChannelModel())

export default service
