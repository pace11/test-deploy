/* eslint-disable @typescript-eslint/no-unused-vars */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log('method => ', req.method)

  // if (req.method !== 'POST') {
  //   res.status(400).json()
  // }

  try {
    const response = await fetch('https://service.pace11.my.id/api/notes')
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    // res.status(500).json({ message: 'Error' })
  }
}
