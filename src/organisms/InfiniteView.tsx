import { ReactNode, useState } from 'react'

import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

const InfiniteView = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const [disable, setDisable] = useState(false)

  if (disable) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        {children}
      </div>
    )
  }
  // activationKeys: ['Shift']
  return (
    <TransformWrapper
      panning={{ activationKeys: ['Alt'] }}
      doubleClick={{ disabled: true }}

      // wheel={{ activationKeys: ['Alt'] }}
    >
      <TransformComponent>
        <div
          className="w-screen h-screen flex justify-center items-center"
          onMouseDown={() => console.log('oi')}
        >
          {children}
        </div>
      </TransformComponent>
    </TransformWrapper>
  )
}

export default InfiniteView
