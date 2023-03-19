export interface IReplacement {
  id: string
  alternatives: (string | string[])[]
}

export interface IData {
  rawSentence: string
  replacements: IReplacement[]
}

export interface IBlocks {
  sentence: string
  sentenceDivided: string[]
  dataBlocks: {
    isColumn: boolean
    cells: {
      isEmphasis: boolean
      text: string
      rawText: string
    }[]
  }[]
}

export type _AnkiData = {
  [key: string]: number
}
