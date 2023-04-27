import { useEffect, useState } from 'react'
import useNoise from '../store/useNoiseStore'

export default function ViewNoise() {
  const erros = useNoise(state => state.erros)
  const show = useNoise(state => state.show)

  const [colorBackground, setColorBackground] = useState('green')

  useEffect(() => {
    if (erros > 7) {
      setColorBackground('white')
    } else if (erros > 6) {
      setColorBackground('purple')
    } else if (erros > 5) {
      setColorBackground('blue')
    } else if (erros > 4) {
      setColorBackground('black')
    } else if (erros > 3) {
      setColorBackground('red')
    } else if (erros > 2) {
      setColorBackground('purple')
    } else if (erros > 1) {
      setColorBackground('orange')
    } else if (erros > 0) {
      setColorBackground('yellow')
    } else {
      setColorBackground('green')
    }
  })

  return (
    <div
      className="h-[40px] absolute top-0 left-0"
      style={{
        background: colorBackground,
        width: 100 - 5 * erros + 'vw',
        opacity: show ? 1 : 0,
      }}
    ></div>
  )
}
