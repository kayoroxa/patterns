import { useEffect } from 'react'

function PlayAudio() {
  let audio = new Audio('/notification.wav')
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.repeat) return
      if (event.key === "'") {
        // const audio = new Audio(audioFile)
        if (audio) {
          audio.currentTime = 0
          audio.play()
        } else if (!audio) {
          audio = new Audio('/notification.wav')
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}

export default PlayAudio
