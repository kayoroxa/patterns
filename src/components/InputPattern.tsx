import { useEffect, useRef, useState } from 'react'

export default function InputPattern({
  onChange,
  initialValue,
}: {
  onChange: (value: string) => void
  initialValue: any
}) {
  const [scriptRaw, setScriptRaw] = useState<string>(initialValue || '')
  const textArea = useRef<HTMLTextAreaElement>(null)
  debugger
  useEffect(() => {
    onChange(typeof scriptRaw === 'string' ? JSON.parse(scriptRaw) : scriptRaw)
  }, [scriptRaw])

  useEffect(() => {
    if (textArea.current) {
      textArea.current.value = JSON.stringify(scriptRaw)
    }
  }, [])

  return (
    <textarea
      id="message"
      ref={textArea}
      // rows="4"
      className=""
      placeholder={'Coloque seus pattern aqui...'}
      // value={scriptRaw}
      onFocus={e => {
        e.currentTarget.value = JSON.stringify(scriptRaw)
      }}
      onBlur={e => {
        setScriptRaw(JSON.parse(e.currentTarget.value))
      }}
      // onChange={e => setScriptRaw(e.currentTarget.value)}
      autoComplete="off"
      spellCheck={false}
      // onKeyDown={e => {
      //   if (e.currentTarget.onkeydown) {

      //     e.currentTarget.onkeydown(asdasdsad)
      //   }
      // }}
    ></textarea>
  )
}
