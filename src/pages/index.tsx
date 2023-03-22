import { useState } from 'react'
import CreateSentences from '../templates/CreateSentences'
// import { bigData } from './data/fr'
// import { useLocalStorage } from 'react-use'
import InputPattern from '../components/InputPattern'
import { bigData as _bigData } from '../data/present'

import { strToPattern, Type } from '../utils/strToPattern'

const after = [
  "That's why I thought, ",
  'right?',
  'at first, but …',
  'since … (since you got here) / since the moment I saw you',
]

export default function PlayPage() {
  const [indexData, setIndexData] = useState(0)
  const [anki, setAnki] = useState<{ [key: string]: number }>({})

  const [initialState, setInitialState] = useLocalStorage('patterns', '')
  const [bigData, setBigData] = useState<Type[]>(_bigData)

  return (
    <div>
      {/* <ReactAudioPlayer src="tick tock.mp3" autoPlay controls /> */}
      {bigData && (
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
      )}
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
      <InputPattern
        onChange={pattern => {
          if (!pattern) return
          const patterns = strToPattern(pattern)

          if (!patterns) return
          setInitialState(pattern)
          setBigData(patterns)
        }}
        initialValue={initialState}
      />
    </div>
  )
}

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
