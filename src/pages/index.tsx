import { useState } from 'react'
import CreateSentences from '../templates/CreateSentences'
// import { bigData } from './data/fr'
import { bigData } from './data/present'

const after = [
  "That's why I thought, ",
  'right?',
  'at first, but …',
  'since … (since you got here) / since the moment I saw you',
]

export default function PlayPage() {
  const [indexData, setIndexData] = useState(0)
  const [anki, setAnki] = useState<{ [key: string]: number }>({})

  return (
    <div>
      {/* <ReactAudioPlayer src="tick tock.mp3" autoPlay controls /> */}
      <CreateSentences
        language="en"
        patternsInfo={{
          currentIndex: bigData.length - indexData,
          length: bigData.length,
        }}
        data={bigData[indexData]}
        onPrev={() =>
          setIndexData(prev => {
            if (prev + 1 >= bigData.length) {
              return 0
            }
            return prev + 1
          })
        }
        anki={anki}
        setAnki={setAnki}
        onNext={() =>
          setIndexData(prev => {
            if (prev - 1 < 0) {
              return bigData.length - 1
            }
            return prev - 1
          })
        }
        before={false}
        after={after}
      />
      {/* <div style={{ padding: '50px' }}>
        {[...new Map(Object.entries(anki).sort((a, b) => a[1] - b[1]))].map(
          v => (
            <>
              {v[0]}: {v[1]}
              <br />
            </>
          )
        )}
      </div> */}
    </div>
  )
}
