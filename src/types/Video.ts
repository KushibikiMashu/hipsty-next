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

export type Video = any

export type Videos = Video[]
