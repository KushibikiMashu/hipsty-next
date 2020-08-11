/* eslint-disable camelcase */

import { Genre } from './Genre'

export type VideoSchema = {
  id: string
  channel_id: string
  title: string
  hash: string
  genre: Genre
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
  genre: Genre
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
