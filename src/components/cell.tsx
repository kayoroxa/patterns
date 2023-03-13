import { useState } from 'react'

interface IProps {
  children: React.ReactNode[] | React.ReactNode
}

export default function Cell({ children }: IProps) {
  const [show, setShow] = useState(true)

  function handleClick(event) {
    if (event.ctrlKey) setShow(prev => !prev)
  }

  return (
    <div
      className="cell"
      style={{ opacity: show ? 1 : 0, cursor: 'pointer' }}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}