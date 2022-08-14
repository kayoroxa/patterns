import { useEffect, useState } from 'react'
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

  useEffect(() => {
    if (isLoading) {
      timer = setInterval(() => {
        setPercent(prev => prev + 1)
      }, 30)
    } else {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [isLoading])

  useEffect(() => {
    if (percent >= 100) {
      clearInterval(timer)
      onEnded()
      setPercent(0)
    }
  }, [percent])

  return (
    <ProgressBack isLoading={isLoading}>
      <Bar percent={percent} />
    </ProgressBack>
  )
}
