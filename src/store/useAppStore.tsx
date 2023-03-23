import { create } from 'zustand'

interface appState {
  modalCategoryId: number | null
  changeModalCategoryId: (by: number) => void
}

const useAppStore = create<appState>()(set => ({
  modalCategoryId: null,
  changeModalCategoryId: by => set(() => ({ modalCategoryId: by })),

  blocksOnBoard: [],
}))

export default useAppStore
