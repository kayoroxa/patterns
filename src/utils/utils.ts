import _ from 'lodash'
import { IBlocks, _AnkiData } from './types'

interface Props {
  arr: string[]
  isRandom?: boolean
  anki: {
    [key: string]: number
  }
  dataSentence: IBlocks
}

function getOnlyVisible(arr) {
  const elementos = Array.from(document.querySelectorAll('.cell.show')).map(
    (item: HTMLElement) => item.innerText.toLowerCase()
    // .replace(/\/.*?\//g, '')
    // .replace(/\".*?\"/g, '')
    // .replace(/[^\w\s\!\.\,\?\d\|\']/gi, '')
    // .trim()
  )

  const elementShuffle = _.shuffle(elementos)

  const sortedFind = elementShuffle.find(item => {
    return arr.map(v => v.toLowerCase()).includes(item.toLowerCase())
  })
  const newIndex = arr.findIndex(v => v === sortedFind)
  return { newIndex, sortedFind }
}

interface GetOld {
  anki: _AnkiData
  arr: string[]
  dataSentence: IBlocks
}

// function getOld({ anki, arr, dataSentence }: GetOld) {
//   const sorted = Array.from(Object.entries(anki))
//     .sort((a, b) => a[1] - b[1])
//     .filter(item => !dataSentence.sentenceDivided.includes(item[0]))

//   const randomArr = Array(2)
//     .fill(0)
//     .map(() => _.random(0, 10))

//   const sortedFind = sorted
//     .filter((_, index) => !randomArr.includes(index))
//     .find(item => arr.includes(item[0]))

//   const newIndex = arr.findIndex(v => v === sortedFind?.[0])

//   return { newIndex, sortedFind }
// }

export const sampleArrayIndex = ({
  arr,
  isRandom,
  anki,
  dataSentence,
}: Props) => {
  // const min = Math.min(arr.length, level)
  // const index = Math.floor(Math.random() * min)
  const indexRandom = Math.floor(Math.random() * arr.length)

  // let onlyVisible = true

  const visible = getOnlyVisible(arr)
  // const old = getOld({ anki, arr, dataSentence})

  return {
    randomIndex: visible.newIndex,
    // randomIndex: sortedFind && !isRandom ? newIndex : indexRandom,
    value: visible.sortedFind ? arr[visible.newIndex] : arr[indexRandom],
  }
}
