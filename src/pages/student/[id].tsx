import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import App from '../Layout'

const studentInfo = () => {
  const id = useParams()
  const [students, setStudents] = useState<any>()
  console.log(id)
  useEffect(() => {
    fetch('/api/students/getStudentById', {
      method: 'post',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setStudents(data)
        return data
      })
  }, [id])
  return (
    <App>
      <div className="text-black">{students?.name}</div>
    </App>
  )
}

export default studentInfo
