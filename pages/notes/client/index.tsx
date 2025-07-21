/* eslint-disable @typescript-eslint/no-unused-vars */
import useSWR from 'swr'
import { useState } from 'react'
import { title } from 'process'

type ListNotes = {
  id: number
  title: string
  description: string
  created_at: string
  updated_at: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function NotesServer() {
  const { data } = useSWR('https://service.pace11.my.id/api/notes', fetcher)
  const [payload, setPayload] = useState({
    title: '',
    description: '',
  })

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://service.pace11.my.id/api/note', {
        method: 'POST',
        body: JSON.stringify(payload),
      })
    } catch (error) {}
  }

  console.log('payload =>', payload)

  return (
    <div>
      <div>
        <form onSubmit={() => handleSubmit()}>
          <input
            value={payload.title}
            onChange={(event) =>
              setPayload((prevState) => ({
                ...prevState,
                title: event.target.value,
              }))
            }
          />
          <input
            value={payload.description}
            onChange={(event) =>
              setPayload((prevState) => ({
                ...prevState,
                description: event.target.value,
              }))
            }
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ul>
        {data?.data?.map((el: ListNotes) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}
