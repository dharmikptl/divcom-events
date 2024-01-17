import { prisma } from '@/lib'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function createStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fname, mname, lname, email, rollnumber, sectionId, standardId } =
    req.body

  try {
    const student = await prisma.students.create({
      data: {
        fname,
        mname,
        lname,
        email,
        rollnumber,
        sectionId,
        standardId
      }
    })

    return res.status(201).json(student)
  } catch (error) {
    return res.status(500).json({ error })
  }
}
