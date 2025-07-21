import { useEffect } from 'react'
import { signIn, useSession, signOut } from 'next-auth/react'

export default function Home() {
  const data = useSession()
  useEffect(() => {
    async function fetchingData() {
      const response = await fetch('https://service.pace11.my.id/api/notes')
      const data = await response.json()
      console.log('data => ', data)
    }
    fetchingData()
  }, [])

  console.log('data => ', data)

  return (
    <div>
      {process.env.NEXT_PUBLIC_DOMAIN_URL}
      <p className="text-3xl font-bold underline">Index Home Update</p>
      {data.status === 'authenticated' && (
        <p>{`login sebagai ${data.data?.user?.email}`}</p>
      )}
      {data.status === 'authenticated' ? (
        <button onClick={() => signOut()}>Signout</button>
      ) : (
        <button onClick={() => signIn('google')}>Sigin with Google</button>
      )}
    </div>
  )
}
