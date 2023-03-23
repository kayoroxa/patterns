import classNames from 'classnames'
import { useEffect, useState } from 'react'

interface Props {
  option: {
    name: string
    countReview: number
  }
}

export default function CellOption({ option }: Props) {
  const [active, setActive] = useState(false)
  const [countReview, setCountReview] = useState(option.countReview)

  useEffect(() => {
    if (active) {
      setCountReview(option.countReview + 1)
    } else {
      setCountReview(option.countReview)
    }
  }, [active])

  return (
    <div
      key={option.name}
      className={classNames(
        { 'bg-orange-500 hover:bg-orange-600': active },
        { 'bg-zinc-700/50 hover:bg-zinc-700': !active },
        'flex gap-6  justify-between px-5 py-2 hover:cursor-pointer '
      )}
      onClick={() => {
        setActive(!active)
      }}
    >
      <p>{option.name}</p>
      <p>{countReview}</p>
    </div>
  )
}
