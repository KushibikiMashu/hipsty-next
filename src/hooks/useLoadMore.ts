import { useCallback, useState } from 'react'

export default function useLoadMore(
  count: number,
  defaultCount = 50
): {
  hasMore: boolean
  currentCount: number
  loadMore: () => void
} {
  const [{ hasMore, currentCount }, setState] = useState(() => {
    const lessVideosThanDefault = count <= defaultCount

    return {
      hasMore: !lessVideosThanDefault,
      currentCount: lessVideosThanDefault ? count : defaultCount,
    }
  })

  const loadMore = useCallback(() => {
    const max = count

    currentCount + defaultCount < max
      ? setState({
          hasMore,
          currentCount: currentCount + defaultCount,
        })
      : setState({
          hasMore: false,
          currentCount: max,
        })
  }, [currentCount])

  return { hasMore: hasMore, currentCount: currentCount, loadMore }
}
