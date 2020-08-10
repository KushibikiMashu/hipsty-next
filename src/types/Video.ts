/* eslint-disable camelcase */

export type VideoSchema = {
  id: string
  channel_id: string
  title: string
  hash: string
  genre: string
  published_at: string
  created_at: string
  updated_at: string
}

export type Video = {
  // Video
  id: string
  channelId: string
  title: string
  hash: string
  genre: string
  publishedAt: string

  // Thumbnail
  thumbnail: string

  // Channel
  channelTitle: string
  channelHash: string
  channelVideoCount: string
  channelPublishedAt: string
}

export type Videos = Video[]
