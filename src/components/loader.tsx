import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const ProgressBack = styled.div<{ isLoading: boolean }>`
  opacity: 0.5;
  position: fixed;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #cacaca;
  width: 700px;
  height: 30px;
  display: ${props => (props.isLoading ? 'block' : 'none')};

  border-radius: 30px;
  overflow: hidden;
`

const Bar = styled.div<{ percent: number }>`
  width: ${props => props.percent}%;
  /* transition: width 0.2s; */
  height: 100%;
  background-color: #0070f3;
  border-radius: 30px;
`

interface IProps {
  isLoading: boolean
  onEnded: () => void
}

let timer: any

export default function ProgressBar({ isLoading, onEnded }: IProps) {
  const [percent, setPercent] = useState(0)
  const audio = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    setPercent(0)
    if (audio.current && isLoading) {
      audio.current.play()
    }

    if (isLoading) {
      timer = setInterval(() => {
        setPercent(prev => prev + 1)
      }, 30)
    } else {
      clearInterval(timer)
      if (audio.current && isLoading) {
        audio.current.pause()
        audio.current.currentTime = 0
      }
    }
    return () => clearInterval(timer)
  }, [isLoading])

  useEffect(() => {
    if (percent >= 100) {
      if (audio.current) {
        audio.current.pause()
        audio.current.currentTime = 0
      }
      clearInterval(timer)
      onEnded()
      setPercent(0)
    }
  }, [percent])

  return (
    <ProgressBack isLoading={isLoading}>
      <audio src="tick-tock.mp3" autoPlay ref={audio} />
      <Bar percent={percent} />
    </ProgressBack>
  )
}
