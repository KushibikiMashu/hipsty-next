import { useState } from 'react'

export default function useLoadMore(
  count: number,
  defaultCount = 50
): {
  hasMoreVideos: boolean
  loadedVideosCount: number
  loadMore: () => void
} {
  const [{ hasMoreVideos, loadedVideosCount }, setState] = useState(() => {
    const lessVideosThanDefault = count < defaultCount

    return {
      hasMoreVideos: !lessVideosThanDefault,
      loadedVideosCount: lessVideosThanDefault ? count : defaultCount,
    }
  })

  const loadMore = () => {
    const max = count

    loadedVideosCount + defaultCount < max
      ? setState({
          loadedVideosCount: loadedVideosCount + defaultCount,
          hasMoreVideos,
        })
      : setState({
          hasMoreVideos: false,
          loadedVideosCount: max,
        })
  }

  return { hasMoreVideos, loadedVideosCount, loadMore }
}
