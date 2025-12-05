// eslint-disable-next-line no-unused-vars
export default function timeLocale(number, index, totalSec) {
  return [
    ['vừa xong', 'ngay bây giờ'],
    ['%ss', 'trong %s giây'],
    ['1m', 'trong 1 phút'],
    ['%sm', 'trong %s phút'],
    ['1h', 'trong 1 giờ'],
    ['%sh', 'trong %s giờ'],
    ['1d', 'trong 1 ngày'],
    ['%sd', 'trong %s ngày'],
    ['1w', 'trong 1 tuần'],
    ['%sw', 'trong %s tuần'],
    ['4w', 'trong 1 tháng'],
    [`${number * 4}w`, 'trong %s tháng'],
    ['1y', 'trong 1 năm'],
    ['%sy', 'trong %s năm'],
  ][index];
}
