import { useEffect } from 'react'
import useNoise from '../store/useNoiseStore'

export default function useNoiseControl() {
  let audio = null
  let timeOut = null
  let started = false

  const addError = useNoise(state => state.addError)
  const resetErros = useNoise(state => state.resetErros)
  const setShow = useNoise(state => state.setShow)

  useEffect(() => {
    audio?.addEventListener('play', () => {
      setShow(true)
    })
    audio?.addEventListener('pause', () => {
      setShow(false)
    })
    audio?.addEventListener('ended', () => {
      setShow(false)
    })
  }, [audio])

  return {
    init() {
      audio = new Audio('/inaudible-noise.wav')
      audio.loop = true
      audio.play()
      started = true
    },
    reset() {
      if (!started) this.init()

      // if (!audio) return
      clearTimeout(timeOut)

      setShow(false)
      resetErros()
      audio.pause()

      timeOut = setTimeout(() => {
        audio.volume = 1
        audio.play()
        setShow(true)
      }, 600)
    },
    putErro() {
      if (!started) this.init()
      // if (!audio) return
      audio.volume = Math.max(0, audio.volume - audio.volume * 0.2)
      addError()
      setShow(true)
      audio.play()
    },
    newCheckpoint() {
      if (!started) this.init()
      // if (!audio) return
      audio.volume = 1
      resetErros()
      setShow(true)
      audio.play()
    },
  }
}
