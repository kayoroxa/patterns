import _ from 'lodash'
import { IBlocks } from './types'

interface Props {
  arr: string[]
  isRandom?: boolean
  anki: {
    [key: string]: number
  }
  dataSentence: IBlocks
}

export const sampleArrayIndex = ({
  arr,
  isRandom,
  anki,
  dataSentence,
}: Props) => {
  // const min = Math.min(arr.length, level)
  // const index = Math.floor(Math.random() * min)
  const indexRandom = Math.floor(Math.random() * arr.length)

  const sorted = Array.from(Object.entries(anki))
    .sort((a, b) => a[1] - b[1])
    .filter(item => !dataSentence.sentenceDivided.includes(item[0]))

  const randomArr = Array(2)
    .fill(0)
    .map(() => _.random(0, 10))

  const sortedFind = sorted
    .filter((_, index) => !randomArr.includes(index))
    .find(item => arr.includes(item[0]))

  const newIndex = arr.findIndex(v => v === sortedFind?.[0])

  return {
    randomIndex: sortedFind && !isRandom ? newIndex : indexRandom,
    value: sortedFind ? arr[newIndex] : arr[indexRandom],
  }
}
