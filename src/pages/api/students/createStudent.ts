import { prisma } from '@/lib'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function createStudent(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, password } = req.body

  try {
    const student = await prisma.student.create({
      data: {
        name,
        email,
        password
      }
    })

    return res.status(201).json(student)
  } catch (error) {
    return res.status(500).json({ error })
  }
}
