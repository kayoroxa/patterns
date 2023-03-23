import { useContext } from 'react'
import Modal from 'react-modal'
import CellOption from '../atoms/CellOption'
import { AppContext } from '../context/AppContext'
import { Category } from '../templates/GenerateScriptTemplate'

interface IProps {
  categories: Category[]
}

export default function ModalSelect({ categories }: IProps) {
  const { setModalCategorySelected, modalCategorySelected } =
    useContext(AppContext)

  return (
    <Modal
      className="bg-zinc-800 w-fit h-fit fixed top-0 left-0 right-0 bottom-0 m-auto flex justify-center items-center"
      isOpen={modalCategorySelected !== null}
      onRequestClose={() => setModalCategorySelected(null)}
    >
      <main className="w-[40vw]">
        {categories
          .find(v => String(v.id) === String(modalCategorySelected))
          ?.options.map(option => (
            <CellOption option={option} key={option.name} />
          ))}
      </main>
    </Modal>
  )
}
