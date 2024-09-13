// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jsforce from 'jsforce'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { eventName, userFullName, email, location } = req.body
  const conn = new jsforce.Connection({
    loginUrl: 'https://umang85patel-dev-ed.my.salesforce.com'
  })
  const userInfo = await conn.login(
    'umang85patel@gmail.com',
    'Mkteq@win242A7rNz2KOz0DxBSwvOVeUa6hez'
  )
  const ret = await conn.sobject('Event_Registrations__c').create({
    Name: eventName,
    Attendee_Name__c: userFullName,
    Email__c: email,
    Location__c: location
  })
  res.status(200).json(ret)
}

export default handler
