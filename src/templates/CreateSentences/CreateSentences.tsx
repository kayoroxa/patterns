import _ from 'lodash'
import { SetStateAction, useEffect, useState } from 'react'
import Cell from '../../components/cell'
import ProgressBar from '../../components/loader'
import { default as useGenerate } from '../../hooks/useGenerate'
import translation from '../../utils/translation'
import { ContainerCreateSentences } from './styles-create-sentences'
import { useSay } from './useSay'

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
  anki: {
    [key: string]: number
  }
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const element = document.activeElement
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') return

      if (e.key === 'Enter' || e.key === 'd') {
        // setScore(0)
        // setLevel(2)

        setAnki({})
        onNext()
      }
      if (e.key === 'a') {
        // setScore(0)
        // setLevel(2)
        setAnki({})
        onPrev()
      }
      if (e.key === '0' || e.key === ' ') {
        e.preventDefault()
        onReloadSentenceRandom()
        // setAllowSpeak(false)
      }
      if (e.key.toLowerCase() === '2') {
        // setScore(prev => prev + 1)
        onReloadSentence()
        onRemember()
      }
      if (e.key.toLowerCase() === '1') {
        // setScore(prev => prev - 1)
        onNotRemember()
        onReloadSentence()
      }
      if (e.key.toLowerCase() === 'h') {
        setShowAnswer(prev => !prev)
      }
      if (e.key.toLowerCase() === 'l') {
        setLang(prev => (prev === 'en' ? 'pt' : 'en'))
      }
      if (e.key.toLowerCase() === 'escape') {
        setShowInfos(prev => !prev)
      }
      if (e.key.toLowerCase() === 'p') {
        // setAllowSpeak(prev => !prev)
      }
      if (e.key.toLowerCase() === 's') {
        // setAllowSpeak(true)
      }
      if (e.key.toLowerCase() === 'insert') {
        setShowProgressBar(true)
      }
      if (e.key.toLowerCase() === 'home') {
        setShowProgressBar(false)
        setShowAnswer(false)
        onReloadSentenceRandom()
        // setAllowSpeak(false)
      }
      if (e.key.toLowerCase() === 'f') {
        speak()
      }

      // if (e.key === 'c') {
      //   console.log(dataSentence.sentence)
      //   // copy to clipboard
      //   const text = dataSentence.sentence
      //   if (text) {
      //     navigator.clipboard.writeText(text)
      //   }
      // }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [data, dataSentence, anki])

  return (
    <ContainerCreateSentences>
      <div className="app">
        {showInfos && <button onClick={onNext}>NEXT...</button>}

        {dataSentence.dataBlocks.length > 0 && (
          <div className="flow-container">
            {before && (
              <div className="al">
                <div className="al-inside">
                  {before.map((item, key) => (
                    <div className="al-item word small" key={key}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {dataSentence.dataBlocks.map((column, index) => {
              if (column.isColumn) {
                return (
                  <div className="al" key={index}>
                    <div className="al-inside">
                      {column.cells.map((v, key) => (
                        <Cell>
                          <div
                            className="tag"
                            style={{
                              background: getColorIntensity(anki[v.rawText]),
                            }}
                          />

                          <div
                            className={`al-item word ${
                              v.isEmphasis && showAnswer && _.sample([true])
                                ? 'emphasis'
                                : ''
                            }`}
                            key={key}
                          >
                            {v.text}
                          </div>
                        </Cell>
                      ))}
                    </div>
                  </div>
                )
              } else {
                return (
                  <Cell>
                    <div className="cell">
                      <div
                        className={`word ${
                          column.cells[0].isEmphasis && showAnswer
                            ? 'emphasis'
                            : ''
                        }`}
                      >
                        {column.cells[0].text}
                      </div>
                    </div>
                  </Cell>
                )
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

function getColorIntensity(score: number) {
  if (score === 0) return `rgb(88, 94, 151)`
  else if (score >= 5) return `rgb(40, 189, 48)`
  else if (score <= -9) return `rgb(255, 0, 0)`
  return `rgb(${Math.min(Math.max(140 - score * 15, 0), 255)}, 120, 180)`
}
