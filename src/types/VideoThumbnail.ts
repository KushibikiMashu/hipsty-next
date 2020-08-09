/* eslint-disable camelcase */

export type VideoThumbnailSchema = {
  id: string
  video_id: string
  std: string
  medium: string
  high: string
  created_at: string
  updated_at: string
}

export type VideoThumbnail = any

export type VideoThumbnails = VideoThumbnail[]
