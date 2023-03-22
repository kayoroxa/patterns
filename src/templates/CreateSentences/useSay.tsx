import { useEffect, useState } from 'react'

function setSpeech() {
  return new Promise(function (resolve) {
    let synth = window.speechSynthesis
    let id: any

    id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices())
        clearInterval(id)
      }
    }, 10)
  })
}

export function useSay(
  text: string | null,
  language?: 'en' | 'fr' | 'es' | 'pt' | null,

  on: boolean = true
) {
  const [utterThis, setUtterThis] = useState<null | SpeechSynthesisUtterance>(
    null
  )

  const [config, setConfig] = useState<any>(false)
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      !config &&
      'speechSynthesis' in window
    ) {
      const utter = new SpeechSynthesisUtterance()

      console.log('1 vezinha')

      setSpeech().then(() => {
        const synth = window.speechSynthesis
        const voices = synth.getVoices()
        var selectedOption = 'Google US English'

        if (language === 'en') {
          utter.lang = 'en_US'
          selectedOption = 'Google US English'
        }
        if (language === 'fr') {
          utter.lang = 'fr-FR'
          selectedOption = 'Google français'
        }
        if (language === 'es') {
          utter.lang = 'es-ES'
          selectedOption = 'Google español'
        }
        if (language === 'pt') {
          utter.lang = 'pt-BR'
          selectedOption = 'Google português'
        }

        voices.forEach(voice => {
          if (voice.name === selectedOption) {
            console.log(voice)
            utter.voice = voice
          }
        })

        setUtterThis(utter)
        setConfig(true)
      })
    }
  }, [language])

  useEffect(() => {
    if (utterThis && text && config) {
      stop()
      utterThis.text = text
      // speak()
    }
  }, [text])

  // useEffect(() => {
  //   // keydown
  //   const keydown = (e: any) => {
  //     if (e.key.toLowerCase() === 'r' || e.key === 's') {
  //       speak()
  //     }
  //   }

  //   window.addEventListener('keydown', keydown)

  //   return () => {
  //     window.removeEventListener('keydown', keydown)
  //   }
  // })

  function speak() {
    let selectedText = window.getSelection().toString()
    if (utterThis && on && selectedText) {
      utterThis.text = selectedText.match(/[\w|']+/gi)[0]
      window.speechSynthesis.speak(utterThis)
      return
    } else if (utterThis && on) {
      window.speechSynthesis.speak(utterThis)
    }
  }

  function stop() {
    if (utterThis) {
      window.speechSynthesis.cancel()
    }
  }

  return {
    speak,
  }
}
