import { createContext, useContext, useState, ReactNode } from 'react'

type User = {
  name: string
  age: string
}

type UserContextType = {
  user: User | null
  setUser: (user: User) => void
  removeUser: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null)

  const setUser = (user: User) => setUserState(user)
  const removeUser = () => setUserState(null)

  return (
    <UserContext.Provider value={{ user, setUser, removeUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) throw new Error('user user not accessable')
  return context
}
