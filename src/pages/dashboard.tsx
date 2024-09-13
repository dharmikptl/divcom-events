import { Card, Col, Row, Typography } from 'antd'
import { useEffect, useState } from 'react'

export const pastEventsAttended = [
  {
    id: 1,
    name: 'Event 1',
    date: '2021-08-01',
    time: '10:00 AM',
    location: 'Location 1',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Event 2',
    date: '2021-08-02',
    time: '11:00 AM',
    location: 'Location 2',
    description:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Event 3',
    date: '2021-08-03',
    time: '12:00 PM',
    location: 'Location 3',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Event 4',
    date: '2021-08-04',
    time: '01:00 PM',
    location: 'Location 4',
    description:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    name: 'Event 5',
    date: '2021-08-05',
    time: '02:00 PM',
    location: 'Location 5',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    image: 'https://via.placeholder.com/150'
  }
]
export default function Dashboard() {
  const [pastEvents, setPastEvents] = useState<any[]>([])

  useEffect(() => {
    const events = JSON.parse(
      localStorage.getItem('pastEventsAttended') || `${pastEventsAttended}`
    )
    console.log(events)

    setPastEvents(events)
  }, [])

  return (
    <div className="p-5">
      <div className="flex items-center gap-5">
        <h1 className="font-bold text-black">Company Logo</h1>
        <Typography.Title
          style={{
            color: '#1890ff',
            marginBottom: 0
          }}
          level={4}
        >
          Dashboard
        </Typography.Title>
      </div>
      <div className="flex items-center justify-center mt-7">
        <Row gutter={[25, 25]} className="w-3/4">
          <Typography.Title
            className="px-3"
            style={{
              color: 'red'
            }}
            level={5}
          >
            Past Events Attended
          </Typography.Title>
          {pastEvents?.map((event: any) => (
            <Col xs={24} key={event.id}>
              <Card hoverable>
                <div className="flex items-center justify-between">
                  <Typography.Title level={4}>{event.name}</Typography.Title>
                  <Typography.Text className="text-lg">
                    {event.location}
                  </Typography.Text>
                </div>
                <div className="flex items-center justify-between">
                  <Typography.Text>{event.description}</Typography.Text>
                </div>
                <div className="mt-2">
                  <Typography.Text type="secondary">
                    Event Date :- {event.date}
                  </Typography.Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
