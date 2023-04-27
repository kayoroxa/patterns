import { useEffect } from 'react'

function PlayAudio() {
  let audio = null
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.repeat) return
      if (event.key === "'") {
        // const audio = new Audio(audioFile)

        if (!audio) {
          audio = new Audio('/notification.wav')
          audio.currentTime = 0
          audio.play()
        } else if (audio?.currentTime) {
          audio.currentTime = 0
          audio.play()
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
