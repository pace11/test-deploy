import Link from 'next/link'

type ListNotes = {
  id: number
  title: string
  description: string
  created_at: string
  updated_at: string
}

type Response = {
  data: ListNotes[]
  message: string
  status: string
}

export default function NotesSsg({ notes }: { notes: Response }) {
  return (
    <div>
      <ul>
        {notes?.data?.map((el) => (
          <li key={el.id}>
            <Link href={`/notes/ssg/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const notes = await fetch('https://service.pace11.my.id/api/notes').then(
    (res) => res.json(),
  )

  return { props: { notes }, revalidate: 3 }
}
