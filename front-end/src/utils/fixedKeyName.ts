export function fixedKeyName(key: string): string {
  let countOne = 0
  return key.replace(/(___)|(__)|(_1_)|(_0_)|(_)/g, (match, one, two, three,four) => {
    if (one) {
      countOne++
      return countOne % 2 === 0 ? ') ' : ' ('
    }
    if (two) return ', '
    if (three) return '/'
    if (four) return ': '
    return ' '
  })
}
