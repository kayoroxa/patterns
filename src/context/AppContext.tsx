import { createContext, ReactNode } from 'react'

interface Context {
  modalCategorySelected: string | null
  setModalCategorySelected: React.Dispatch<React.SetStateAction<string>>
}

export const AppContext = createContext<Context>({} as Context)

import { useState } from 'react'

export default function AppContextProvider({
  children,
}: {
  children: ReactNode | ReactNode[]
}) {
  const [modalCategorySelected, setModalCategorySelected] = useState<
    string | null
  >(null)

  return (
    <AppContext.Provider
      value={{ modalCategorySelected, setModalCategorySelected }}
    >
      {children}
    </AppContext.Provider>
  )
}
