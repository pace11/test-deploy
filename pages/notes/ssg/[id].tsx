/* eslint-disable @typescript-eslint/no-explicit-any */
type ListNotes = {
  id: number
  title: string
  description: string
  created_at: string
  updated_at: string
}

type Response = {
  data: ListNotes
  message: string
  status: string
}

export default function NotesSsgDetail({ notes }: { notes: Response }) {
  return (
    <div>
      <p>Title: {notes.data.title}</p>
      <p>Desc: {notes.data.description}</p>
    </div>
  )
}

export const getStaticPaths = async () => {
  const notes = await fetch('https://service.pace11.my.id/api/notes').then(
    (res) => res.json(),
  )

  const paths = notes.data.map((note: ListNotes) => ({
    params: { id: String(note.id) },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context: { params: any }) => {
  const { params } = context
  const notes = await fetch(
    `https://service.pace11.my.id/api/note/${params.id}`,
  ).then((res) => res.json())

  return { props: { notes } }
}
