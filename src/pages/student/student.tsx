import App from '@/pages/Layout'
import { Table } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Student {
  name: string
}

export default function Student() {
  const [students, setStudents] = useState<any[]>([])

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

  return (
    <App>
      <Table
        loading={students.length === 0}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (id: string, record) => (
              <Link href={`/student/${record.id}`}>{id}</Link>
            )
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
          }
        ]}
        dataSource={students}
      ></Table>
    </App>
  )
}
