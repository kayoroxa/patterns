import { useEffect } from 'react'
import useNoiseControl from './useNoise'

function PlayAudioInaudible() {
  const { init, reset, newCheckpoint, putErro } = useNoiseControl()

  useEffect(() => {
    init()

    function handleKeyDown(event) {
      if (event.key === 'ArrowLeft') {
        putErro()
      }
      if (event.key === 'ArrowUp') {
        newCheckpoint()
      }
      if (event.key === 'ArrowRight') {
        reset()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}

export default PlayAudioInaudible
