import { prisma } from '@/lib'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const student = await prisma.students.findMany()

    return res.json(student)
  } catch (error) {
    return res.status(500).json({ error })
  }
}
