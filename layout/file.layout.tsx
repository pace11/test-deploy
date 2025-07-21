import React from 'react'

export default function FileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>File Layout</h1>
      {children}
    </div>
  )
}
