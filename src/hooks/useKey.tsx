import { useEffect } from 'react'

export default function useKey(funcs: any = {}, dependencyList = []) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const element = document.activeElement
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') return

      if (Object.keys(funcs).includes(e.key)) {
        e.preventDefault()
        funcs[e.key]()
        return
      }

      if (e.key === 'Enter' || e.key === 'd') {
        e.preventDefault()
        funcs.enter()
      }
      if (e.key === 'a') {
        e.preventDefault()
        funcs.a()
      }
      if (e.key === '0' || e.key === ' ') {
        e.preventDefault()
        funcs['0']()
      }
      if (e.key.toLowerCase() === '2') {
        e.preventDefault()
        funcs['2']()
      }
      if (e.key.toLowerCase() === '1') {
        e.preventDefault()
        funcs['1']()
      }
      if (e.key.toLowerCase() === 'h') {
        e.preventDefault()
        funcs['h']()
      }
      if (e.key.toLowerCase() === 'l') {
        e.preventDefault()
        funcs['l']()
      }
      if (e.key.toLowerCase() === 'escape') {
        e.preventDefault()
        funcs['escape']()
      }
      if (e.key.toLowerCase() === 'p') {
        e.preventDefault()
        funcs['p']()
      }
      if (e.key.toLowerCase() === 's') {
        e.preventDefault()
        funcs['s']()
      }
      if (e.key.toLowerCase() === 'insert') {
        e.preventDefault()
        funcs['insert']()
      }
      if (e.key.toLowerCase() === 'home') {
        e.preventDefault()
        funcs['home']()
      }
      if (e.key.toLowerCase() === 'f' || e.key === 'Tab') {
        e.preventDefault()
        funcs['f']()
      }
      if (e.key === 'PageDown') {
        e.preventDefault()
        //scroll to bottom
        window.scrollTo(0, document.body.scrollHeight)
      }
      if (e.key === 'PageUp') {
        e.preventDefault()
        //scroll to top
        window.scrollTo(0, 0)
      }

      // if (e.key === 'c') {
      //   console.log(dataSentence.sentence)
      //   // copy to clipboard
      //   const text = dataSentence.sentence
      //   if (text) {
      //     navigator.clipboard.writeText(text)
      //   }
      // }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, dependencyList)
}
