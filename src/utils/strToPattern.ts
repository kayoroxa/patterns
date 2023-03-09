function transform1(string) {
  string = string.trim()
  const rawSentence = string.split(/\n\n+/g)[0]
  const groups = string.split(/\n\n+/g).slice(1)

  const replacements = groups.map(group => {
    const [id, ...alternatives] = group.split(/\n/g).filter(Boolean)

    return {
      id: id?.replace(/\:/, ''),
      alternatives,
    }
  })

  return {
    rawSentence,
    replacements,
  }
}

export function strToPattern(bigString: string) {
  debugger
  if (!bigString) return false
  if (typeof bigString !== 'string') return bigString
  debugger
  bigString = bigString?.trim()

  const bigData = bigString.split(/\/\/+/g).map(transform1)

  return bigData
}
