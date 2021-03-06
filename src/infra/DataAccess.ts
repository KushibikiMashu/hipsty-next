import { videos } from 'src/data/videos'
import { videoThumbnails } from 'src/data/videoThumbnails'
import { channels } from 'src/data/channels'
import { channelThumbnails } from 'src/data/channelThumbnails'
import { VideoSchema } from '../types/Video'
import { VideoThumbnailSchema } from '../types/VideoThumbnail'
import { ChannelSchema } from '../types/Channel'
import { ChannelThumbnailSchema } from '../types/ChannelThumbnail'
import { genres } from '../data/genre'
import { GenreSchema } from '../types/Genre'

// DataAccess層を設けることによって、データソースに対する関心が分離できる
// 仮にNetwork（API）を通じてデータを取得する変更があったとしても容易である

export interface Model<T> {
  findAll(): T[]
}

export class VideoModel implements Model<VideoSchema> {
  findAll = () => videos as VideoSchema[]
}

export class VideoThumbnailModel implements Model<VideoThumbnailSchema> {
  findAll = () => videoThumbnails
}

export class ChannelModel implements Model<ChannelSchema> {
  findAll = () => channels
}

export class ChannelThumbnailModel implements Model<ChannelThumbnailSchema> {
  findAll = () => channelThumbnails
}

export class GenreModel implements Model<GenreSchema> {
  findAll = () => genres
}
