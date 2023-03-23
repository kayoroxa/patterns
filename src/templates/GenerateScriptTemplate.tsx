import CellOption from '../atoms/CellOption'
import ModalSelect from '../organisms/ModalSelect'
import useAppStore from '../store/useAppStore'

export type Category = {
  id: number
  name: string
  options: {
    name: string
    countReview: number
    isOnBoard?: boolean
  }[]
}

interface IProps {
  data: Category[]
}

export default function GenerateScriptTemplate({ data: categories }: IProps) {
  const changeModalCategoryId = useAppStore(s => s.changeModalCategoryId)

  function handleClick(id) {
    changeModalCategoryId(id)
  }
  return (
    <div>
      <h1 className="py-6 px-4 text-2xl">Generate Script:</h1>
      <main className="flex gap-4 px-5 justify-center">
        {categories.map(category => (
          <div
            key={category.id}
            className="bg-zinc-800 flex flex-col gap-2 p-1"
          >
            <header className="flex gap-2 self-center">
              <h2 className="text-4xl text-center">{category.name}</h2>
              <button
                className="text-4xl bg-zinc-700 rounded-full w-10"
                onClick={() => handleClick(category.id)}
              >
                +
              </button>
            </header>
            {category.options
              .filter(op => op.isOnBoard)
              .map(option => (
                <CellOption option={option} key={option.name} />
              ))}
          </div>
        ))}
      </main>
      <ModalSelect categories={categories} />
    </div>
  )
}
