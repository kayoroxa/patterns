import { Dispatch, SetStateAction, useState } from 'react'
import { getLangAlternative } from '../templates/CreateSentences/funcs'
import sentenceCodeFinderAndSanitize from '../utils/sentenceCodeFinder'
import { IBlocks, IData } from '../utils/types'
import { sampleArrayIndex } from '../utils/utils'

interface MainProps {
  dataSentence: IBlocks
  anki: {
    [key: string]: number
  }
  setAnki: (
    value: SetStateAction<{
      [key: string]: number
    }>
  ) => void
  lang: 'en' | 'pt'
}

export default function useGenerate(props: MainProps) {
  const [combinations, setCombinations] = useState(0)

  return {
    generateBlocksData: (data: IData, isRandom?: boolean) => {
      return generateBlocksData({ ...props, data, setCombinations, isRandom })
    },

    combinations,
  }
}

interface Props {
  data: IData
  isRandom?: boolean
  setCombinations: Dispatch<SetStateAction<number>>
  dataSentence: IBlocks
  anki: {
    [key: string]: number
  }
  setAnki: (
    value: SetStateAction<{
      [key: string]: number
    }>
  ) => void
  lang: 'en' | 'pt'
}

export function generateBlocksData({
  data,
  isRandom,
  dataSentence,
  anki,
  setAnki,
  lang,
  setCombinations,
}: Props) {
  let endSentence = false

  const { rawSentence, replacements } = data
  const sentencePattern = rawSentence
    .split(/(\{.*?\})/g)
    .map(v => v.trim())
    .filter(item => item.length > 0)

  let sentenceChoice: string[] = []
  let rawSentenceChoice: string[] = []

  const dataBlocks = sentencePattern.map((word, indexColumn) => {
    setCombinations(
      replacements
        .map(v => v.alternatives)
        .reduce((acc, cur) => {
          return acc * cur.length
        }, 1)
    )
    const isItTag = word.startsWith('{') && word.endsWith('}')
    if (isItTag) {
      const id: string = word.slice(1, -1)

      let replacement = replacements.find(replacement => replacement.id === id)
      if (replacement) {
        replacement.alternatives = replacement.alternatives.map(v =>
          v === '_' ? `${v}${indexColumn}` : v
        )

        let { randomIndex } = sampleArrayIndex({
          arr: replacement.alternatives.map(v => getLangAlternative(lang, v)),
          isRandom,
          anki,
          dataSentence,
        })

        const andWithPunctuation = ['.', '!', '?'].some(p =>
          sentenceChoice.slice(-1)[0]?.endsWith(p)
        )

        if (andWithPunctuation) endSentence = true

        const column = replacement.alternatives.map((alternative, key) => {
          if (typeof alternative !== 'string') {
            throw new Error('alternative must be a string')
          }

          // let alternativeEn = getLangAlternative('en', alternative)
          alternative = getLangAlternative(lang, alternative)

          const isEmphasis: boolean =
            randomIndex === key && !alternative.includes('_') && !endSentence

          let rawText: string = alternative

          if (randomIndex === key) {
            rawSentenceChoice.push(rawText)
          }

          if (isEmphasis) {
            sentenceChoice.push(alternative.replace(/[-]/g, ''))
            // sentenceChoice.push(
            //   getOption(sentenceChoice, alternative.replace(/[-]/g, ''))
            // )
          }

          const cellsLine = {
            isEmphasis,
            text: alternative.replace(/\d/g, ''),
            rawText,
          }

          if (!Object.keys(anki).some(item => rawText === item)) {
            setAnki(prev => {
              const newPrev = { ...prev }
              newPrev[rawText.replace(/[^\w\s\!\.\,\?\d\|\']/gi, '').trim()] = 0
              return newPrev
            })
          }

          return cellsLine
        })

        return {
          isColumn: true,
          cells: column,
        }
      }
    }
    if (!endSentence) {
      rawSentenceChoice.push(word)
      sentenceChoice.push(word)
    }

    return {
      isColumn: false,
      cells: [
        {
          isEmphasis: !endSentence,
          text: word,
          rawText: word,
        },
      ],
    }
  })

  console.log({
    sentenceChoice,
    g: sentenceCodeFinderAndSanitize(sentenceChoice),
  })

  const generate: IBlocks = {
    sentenceDivided: rawSentenceChoice.map(v =>
      v.replace(/[^\w\s\!\.\,\?\d\|\']/gi, '').trim()
    ),
    sentence: sentenceCodeFinderAndSanitize(sentenceChoice)
      .join(' ')
      .replace(/\s\'/g, "'")
      .replace(/\sn\'t/g, "n't"),
    dataBlocks,
  }

  return generate
}
