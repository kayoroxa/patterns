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
    onChange(scriptRaw)
  }, [scriptRaw])

  useEffect(() => {
    if (textArea.current) {
      textArea.current.value = scriptRaw
    }
  }, [])

  return (
    <textarea
      id="message"
      style={{
        width: '90%',
        height: '600px',
        right: '0px',
        margin: 'auto',
        marginTop: '20px',
      }}
      ref={textArea}
      // rows="4"
      className=""
      placeholder={'Coloque seus pattern aqui...'}
      // value={scriptRaw}
      onFocus={e => {
        e.currentTarget.value = scriptRaw
      }}
      onBlur={e => {
        if (e.currentTarget.value) {
          setScriptRaw(e.currentTarget.value)
        }
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
