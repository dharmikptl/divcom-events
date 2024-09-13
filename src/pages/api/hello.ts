// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jsforce from 'jsforce'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const conn = new jsforce.Connection({
    loginUrl: 'https://umang85patel-dev-ed.my.salesforce.com'
  })
  const userInfo = await conn.login(
    'umang85patel@gmail.com',
    'Mkteq@win242A7rNz2KOz0DxBSwvOVeUa6hez'
  )
  console.log(userInfo)
  res.status(200).json({ name: 'John Doe' })
}

export default handler
