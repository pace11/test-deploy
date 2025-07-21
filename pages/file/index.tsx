// import { profile } from 'console'
// import Image from 'next/image'

import { useUser } from '@/store/userContext'

export default function File() {
  const { user, setUser, removeUser } = useUser()

  const handleClick = () => {
    setUser({ name: 'Rehan', age: '15' })
  }

  return (
    <div>
      {user && (
        <div>
          <p>{`Nama : ${user.name}`}</p>
          <p>{`Umur : ${user.age}`}</p>
        </div>
      )}

      <button onClick={() => handleClick()}>Isikan data</button>
      <button onClick={() => removeUser()}>Remove User</button>

      {/* <Image src="/asset-1.jpg" alt="asset-1" width="1000" height="600" /> */}
    </div>
  )
}

// context (provider) => userData

// /home
// /profile
// /about
