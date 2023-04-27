import { create } from 'zustand'

interface noiseState {
  erros: number
  addError: () => void
  resetErros: () => void
  show: boolean
  setShow: (bol: boolean) => void
}

const useNoise = create<noiseState>()(set => ({
  erros: 0,
  addError: () => set(state => ({ erros: state.erros + 1 })),
  resetErros: () => set(() => ({ erros: 0 })),
  show: false,
  setShow: bol => set(() => ({ show: bol })),
}))

export default useNoise
