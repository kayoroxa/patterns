import _ from 'lodash'
import { _AnkiData } from '../utils/types'
import CellContainer from './cellContainer'

type ColumnData = {
  isColumn: boolean
  cells: {
    isEmphasis: boolean
    text: string
    rawText: string
  }[]
}

interface Props {
  columnData: ColumnData
  anki: _AnkiData
  showAnswer?: boolean
}

export default function ColumnBlocks({ columnData, anki, showAnswer }: Props) {
  return (
    <div className="al">
      <div className="al-inside">
        {columnData.cells.map((v, key) => (
          <CellContainer _id={v.text}>
            <div
              className="tag"
              style={{
                background: getColorIntensity(anki[v.rawText]),
              }}
            />

            <div
              className={`al-item word ${
                v.isEmphasis && showAnswer && _.sample([true]) ? 'emphasis' : ''
              }`}
              key={key}
            >
              {v.text}
            </div>
          </CellContainer>
        ))}
      </div>
    </div>
  )
}

function getColorIntensity(score: number) {
  if (score === 0) return `rgb(88, 94, 151)`
  else if (score >= 5) return `rgb(40, 189, 48)`
  else if (score <= -9) return `rgb(255, 0, 0)`
  return `rgb(${Math.min(Math.max(140 - score * 15, 0), 255)}, 120, 180)`
}
