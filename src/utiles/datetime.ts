import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs().locale('ja')

export const compareDate = (left: string, right: string): number =>
  dayjs(left).valueOf() > dayjs(right).valueOf() ? 1 : -1
