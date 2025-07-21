import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/layout'
import { SessionProvider } from 'next-auth/react'
import { UserProvider } from '@/store/userContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <UserProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </UserProvider>
    </SessionProvider>
  )
}
