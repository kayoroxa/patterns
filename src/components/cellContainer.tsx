import { useState } from 'react'

interface IProps {
  children: React.ReactNode[] | React.ReactNode
}

export default function CellContainer({ children }: IProps) {
  const [show, setShow] = useState(true)

  function handleClick(event) {
    if (event.ctrlKey) setShow(prev => !prev)
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
