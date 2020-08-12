import { act, renderHook } from '@testing-library/react-hooks'
import useLoadMore from '../useLoadMore'

describe('useLoadMore', () => {
  test('countがdefaultCount以下のとき、hasMoreはfalse、currentCountは10を返す', () => {
    const count = 10
    const { result } = renderHook(() => useLoadMore(count))

    expect(result.current.hasMore).toBeFalsy()
    expect(result.current.currentCount).toBe(10)
  })

  test('countがdefaultCountと同じとき、hasMoreはfalse、currentCountは50を返す', () => {
    const count = 50
    const { result } = renderHook(() => useLoadMore(count))

    expect(result.current.hasMore).toBeFalsy()
    expect(result.current.currentCount).toBe(50)
  })

  test('countがdefaultCountより大きいとき、hasMoreはtrue、currentCountは50を返す', () => {
    const count = 80
    const { result } = renderHook(() => useLoadMore(count))

    expect(result.current.hasMore).toBeTruthy()
    expect(result.current.currentCount).toBe(50)
  })

  test('countがdefaultCount*2より大きくloadMoreを1度実行したとき、currentCountは100を返す', () => {
    const count = 130
    const { result } = renderHook(() => useLoadMore(count))

    act(() => {
      result.current.loadMore()
    })

    expect(result.current.hasMore).toBeTruthy()
    expect(result.current.currentCount).toBe(100)
  })

  test('countがdefaultCount*2より大きくloadMoreを2度実行したとき、currentCountはcountを返す', () => {
    const count = 130
    const { result } = renderHook(() => useLoadMore(count))

    act(() => {
      result.current.loadMore()
    })

    act(() => {
      result.current.loadMore()
    })

    expect(result.current.hasMore).toBeFalsy()
    expect(result.current.currentCount).toBe(count)
  })
})
