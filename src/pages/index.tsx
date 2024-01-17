import { useEffect, useState } from 'react'
import App from './Layout'

export default function Home() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('/api/students/getStudent', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setStudents(data)
        return data
      })
  }, [])

  return <App>Dharmik</App>
}
