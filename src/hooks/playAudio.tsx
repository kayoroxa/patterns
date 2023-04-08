import { useEffect } from 'react'

function PlayAudio() {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.shiftKey) {
        // const audio = new Audio(audioFile)
        const audio = new Audio('/notification.wav')
        audio.play()
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
