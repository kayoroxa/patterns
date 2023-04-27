import { create } from 'zustand'

interface blockState {
  lastBlockKey: string | null
  setLastBlockKey: (key: string) => void
  showAll: boolean
  toggleShowAll: () => void
}

const useBlockStore = create<blockState>()(set => ({
  lastBlockKey: null,
  setLastBlockKey: (key: string) => set({ lastBlockKey: key }),
  showAll: true,
  toggleShowAll: () => set(state => ({ showAll: !state.showAll })),
}))

export default useBlockStore
