import { useState } from 'react'
import ProgressBar from '../components/loader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div>
      <ProgressBar isLoading={isLoading} onEnded={() => setIsLoading(false)} />
    </div>
  )
}
