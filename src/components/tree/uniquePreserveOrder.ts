export const uniquePreserveOrder = (arr: string[]) => {
  const seen = new Set()
  return arr.filter(item => {
    if (seen.has(item)) return false
    seen.add(item)
    return true
  })
}
