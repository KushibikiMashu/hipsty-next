import * as datetime from '../datetime'

describe('datetime', () => {
  describe('compareDate', () => {
    const a = '2020-01-01 00:00:00'
    const b = '2010-01-01 00:00:00'

    test('第一引数が大きい日付、第二引数が小さい日付のとき、1を返す', () => {
      const actual = datetime.compareDate(a, b)

      expect(actual).toBe(1)
    })

    test('第一引数が小さい日付、第二引数が大きい日付のとき、-1を返す', () => {
      const actual = datetime.compareDate(b, a)

      expect(actual).toBe(-1)
    })

    test('比較対象が同じ値のとき、-1を返す', () => {
      const actual = datetime.compareDate(a, a)

      expect(actual).toBe(-1)
    })
  })
})
