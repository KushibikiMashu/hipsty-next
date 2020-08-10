import { ChannelModel, VideoModel, VideoThumbnailModel } from './DataAccess'
import { Video, Videos } from '../types/Video'

class VideoService {
  constructor(
    private videoModel: VideoModel,
    private videoThumbnailModel: VideoThumbnailModel,
    private channelModel: ChannelModel
  ) {}

  getAllVideo = (): Videos => {
    const videos = this.videoModel.findAll()
    const videoThumbnails = this.videoThumbnailModel.findAll()

    if (videos.length !== videoThumbnails.length) {
      throw new Error()
    }

    const channels = this.channelModel.findAll()
    const channelIds = channels.map((channel) => channel.id)
    const channelMap = new Map()

    for (let i = 0; i < channelIds.length; i++) {
      const channel = channels[i]
      channelMap.set(channel.id, channel.title)
    }

    return videos.map((video, i) => {
      const thumbnail = videoThumbnails[i]
      const channel = channelMap.get(video.channel_id)

      if (typeof channel === 'undefined') {
        throw new Error()
      }

      return {
        // Video
        id: video.id,
        channelId: video.channel_id,
        title: video.title,
        hash: video.hash,
        genre: video.genre,
        publishedAt: video.published_at,

        // Thumbnail
        thumbnail: thumbnail.high,

        // Channel
        channelTitle: channel.title,
        channelHash: channel.hash,
        channelVideoCount: channel.video_count,
        channelPublishedAt: channel.published_at,
      }
    })
  }

  getVideoByHash = (hash: string): Video => {
    const videos = this.getAllVideo()
    const video = videos.find((video) => video.hash === hash)

    if (!video) {
      throw new Error()
    }

    return video
  }
}

const service = new VideoService(new VideoModel(), new VideoThumbnailModel(), new ChannelModel())

export default service
