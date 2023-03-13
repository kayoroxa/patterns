function transform(stringPattern) {
  stringPattern = stringPattern.trim()
  const rawSentence = stringPattern.split(/\n\n+/g)[0]
  const groups = stringPattern.split(/\n\n+/g).slice(1)

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

export interface Type {
  rawSentence: string
  replacements: {
    id: string
    alternatives: string[]
  }[]
}

export function strToPattern(allPatternsStr: string): Type[] | false {
  debugger
  if (!allPatternsStr) return false
  if (typeof allPatternsStr !== 'string') return allPatternsStr

  allPatternsStr = allPatternsStr?.trim()

  const bigData = allPatternsStr
    .split(/\/\/+/g)
    .map(strPattern => transform(strPattern))

  return bigData
}
