import CellContainer from './cellContainer'

interface Props {
  data: {
    isEmphasis: boolean
    text: string
    rawText: string
  }
  showAnswer?: boolean
}

export default function Cell({ data, showAnswer }: Props) {
  return (
    <CellContainer>
      <div className="cell">
        <div
          className={`word ${data.isEmphasis && showAnswer ? 'emphasis' : ''}`}
        >
          {data.text}
        </div>
      </div>
    </CellContainer>
  )
}
