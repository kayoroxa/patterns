export default function codeFinder(frase: string[]) {
  // remove caracteres
  const fraseClean = frase.map(word =>
    word.replace(/[^\w\s\!\.\,\?\d\|\']/gi, '').trim()
  )
  frase = fraseClean
  const dict = [
    { p: ['i'], codes: ['do', "don't", 'am', 'have'] },
    { p: ['you', 'we', 'they', 'guys'], codes: ['do', "don't", 'are', 'have'] },
    { p: ['he', 'she', 'it', 'mom'], codes: ['does', "doesn't", 'is', 'has'] },
  ]

  const newFrase = frase.reduce((acc: string[], word) => {
    const wordClean = word.replace(/[^\w\s\!\.\,\?\d\|\']/gi, '').trim()
    const iconCode = '' //word.match(/[^\w\s\!\.\,\?\d\|\']/gi)?.join('')
    if (word.includes('|')) {
      const codesInFrase: string[] = wordClean.split(/\s\|\s|\|/)
      const suj = fraseClean.find(w => dict.some(d => d.p.includes(w)))
      const lastCode = codesInFrase[codesInFrase.length - 1]

      const sujDict = dict.find(d => d.p.some(p => p === suj))
      const code = sujDict?.codes.find(codeInSujDict =>
        codesInFrase.some(codeInFrase => codeInFrase === codeInSujDict)
      )

      if (!suj || !sujDict || !code)
        return [...acc, (iconCode + lastCode).trim()]

      return [...acc, (iconCode + code).trim()]
    } else {
      acc.push(word)
    }
    return acc
  }, [])

  return newFrase
}
