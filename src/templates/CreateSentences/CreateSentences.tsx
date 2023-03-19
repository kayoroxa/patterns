import { SetStateAction, useEffect, useState } from 'react'
import BeforeColumn from '../../components/BeforeColumn'
import Cell from '../../components/Cell'
import ColumnBlocks from '../../components/Column'
import ProgressBar from '../../components/loader'
import { default as useGenerate } from '../../hooks/useGenerate'
import useKey from '../../hooks/useKey'
import translation from '../../utils/translation'
import { IBlocks, IData, _AnkiData } from '../../utils/types'
import { ContainerCreateSentences } from './styles-create-sentences'
import { useSay } from './useSay'

interface IProps {
  data: IData
  onNext: () => any
  onPrev: () => any
  after: string[] | false
  before: string[] | false
  patternsInfo: {
    currentIndex: number
    length: number
  }
  language?: 'en' | 'fr' | 'es' | 'pt'
  anki: _AnkiData
  setAnki: (
    value: SetStateAction<{
      [key: string]: number
    }>
  ) => void
}

const CreateSentences = ({
  data,
  onNext,
  before,
  patternsInfo,
  language,
  onPrev,
  anki,
  setAnki,
}: IProps) => {
  const [showAnswer, setShowAnswer] = useState(true)
  const [lang, setLang] = useState<'en' | 'pt'>('en')
  const [showInfos, setShowInfos] = useState(true)
  const [allowSpeak, setAllowSpeak] = useState(true)
  const [showProgressBar, setShowProgressBar] = useState(false)
  // const [score, setScore] = useState(0)
  // const [level, setLevel] = useState(2)

  const [dataSentence, setDataSentence] = useState<IBlocks>({
    sentence: '',
    sentenceDivided: [],
    dataBlocks: [],
  })

  function onNotRemember() {
    setAnki(prev => {
      const newPrev = { ...prev }
      dataSentence.sentenceDivided.forEach(word => {
        if (newPrev[word]) newPrev[word] -= 1
        else newPrev[word] = -1
      })
      return newPrev
    })
  }
  function onRemember() {
    setAnki((prev: any) => {
      const newPrev: any = { ...prev }
      dataSentence.sentenceDivided.forEach(word => {
        if (newPrev[word]) newPrev[word] += 1
        else newPrev[word] = +1
      })
      return newPrev
    })
  }

  // useEffect(() => {
  //   if (score > 6) {
  //     setLevel(prev => prev + 1)
  //     setScore(0)
  //   }
  // }, [score])

  // useEffect(() => {
  //   console.log(
  //     Array(100)
  //       .fill(false)
  //       .map(() => generateBlocksData(data).sentence + ', _')
  //       .join('\n')
  //   )
  // }, [])

  const { combinations, generateBlocksData } = useGenerate({
    dataSentence,
    anki,
    setAnki,
    lang,
  })

  useEffect(() => {
    if (!showProgressBar) {
      setShowAnswer(true)
    }
  }, [showProgressBar])

  function onReloadSentence() {
    setDataSentence(generateBlocksData(data))
  }
  function onReloadSentenceRandom() {
    setDataSentence(generateBlocksData(data, true))
  }

  useEffect(() => {
    onReloadSentence()
  }, [data, lang])

  const { speak } = useSay(
    dataSentence.sentence.replace(/[^\w.!?\s]/g, ''),
    language,
    true //lang == 'en' && allowSpeak
  )

  //

  const keys = {
    enter: () => {
      setAnki({})
      onNext()
    },
    a: () => {
      setAnki({})
      onPrev()
    },
    '0': () => {
      onReloadSentenceRandom()
    },
    '2': () => {
      onReloadSentence()
      onRemember()
    },

    '1': () => {
      // setScore(prev => prev - 1)
      onNotRemember()
      onReloadSentence()
    },
    h: () => {
      setShowAnswer(prev => !prev)
    },
    l: () => {
      setLang(prev => (prev === 'en' ? 'pt' : 'en'))
    },
    escape: () => {
      setShowInfos(prev => !prev)
    },
    p: () => {
      // setAllowSpeak(prev => !prev)
    },
    s: () => {
      // setAllowSpeak(true)
    },
    insert: () => {
      setShowProgressBar(true)
    },
    home: () => {
      setShowProgressBar(false)
      setShowAnswer(false)
      onReloadSentenceRandom()
      // setAllowSpeak(false)
    },
    f: () => {
      speak()
    },
  }

  useKey(keys, [data, dataSentence, anki])

  return (
    <ContainerCreateSentences>
      <div className="app">
        {showInfos && <button onClick={onNext}>NEXT...</button>}

        {dataSentence.dataBlocks.length > 0 && (
          <div className="flow-container">
            {before && <BeforeColumn data={before} />}

            {dataSentence.dataBlocks.map((column, index) => {
              if (column.isColumn) {
                return (
                  <ColumnBlocks
                    key={index}
                    columnData={column}
                    anki={anki}
                    showAnswer={showAnswer}
                  />
                )
              } else {
                return <Cell data={column.cells[0]} showAnswer={showAnswer} />
              }
            })}
          </div>
        )}
        {showAnswer && (
          <div className="after word">{dataSentence.sentence}</div>
        )}
        <div className="translation">{translation(dataSentence.sentence)}</div>
        <div className="translation-en">{dataSentence.sentence}</div>
        <ProgressBar
          isLoading={showProgressBar}
          onEnded={() => setShowProgressBar(false)}
        />
        {showInfos && (
          <>
            <div className="combinations">{combinations}</div>
            <div className="index">
              N: {patternsInfo?.currentIndex}/{patternsInfo?.length}
            </div>
          </>
        )}
      </div>
    </ContainerCreateSentences>
  )
}

export default CreateSentences
