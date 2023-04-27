import { useEffect, useState } from 'react'
import useNoiseControl from '../hooks/useNoise'
import useBlockStore from '../store/useBlockStore'

interface IProps {
  children: React.ReactNode[] | React.ReactNode
  _id: string
}

export default function CellContainer({ children, _id }: IProps) {
  const [show, setShow] = useState(true)
  const noiseControl = useNoiseControl()
  // const [isMakingMistakes, setIsMakingMistakes] = useState(false)
  const setLastBlockKey = useBlockStore(state => state.setLastBlockKey)
  const lastBlockKey = useBlockStore(state => state.lastBlockKey)
  // se já errou - está errando agora mesmo
  const showAll = useBlockStore(state => state.showAll)

  useEffect(() => {
    setShow(showAll)
  }, [showAll])

  function handleClick(event) {
    if (event.ctrlKey) {
      const willShow = !show
      debugger
      if (!willShow) {
        setLastBlockKey(_id)
        noiseControl.putErro()
      } else if (lastBlockKey !== _id) {
        setLastBlockKey(_id)
        noiseControl.reset()
      }
      setShow(prev => !prev)
    }
  }

  return (
    <div
      className={'cell' + (show ? ' show' : '')}
      style={{ opacity: show ? 1 : 0, cursor: 'pointer' }}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
