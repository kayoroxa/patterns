import { useEffect, useState } from 'react'
import GenerateScriptTemplate from '../templates/GenerateScriptTemplate'
import { axiosApi } from '../utils/axiosApi'
type Data = {
  id: number
  name: string
  options: {
    name: string
    countReview: number
  }[]
}[]

export default function GenerateScript() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axiosApi.get<Data>('/categories')
        setPosts(
          response.data.map(post => ({
            ...post,
            options: post.options.sort((a, b) => a.countReview - b.countReview),
          }))
        )
      } catch (error) {
        console.error(error)
      }
    }

    fetchPosts()
  }, [])

  return <GenerateScriptTemplate data={posts} />
}
