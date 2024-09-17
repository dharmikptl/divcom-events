import { Button, Card, message, Typography } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export const newEvents = [
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
  },
  {
    id: 6,
    name: 'Event 6',
    date: '2021-08-01',
    time: '10:00 AM',
    location: 'Location 1',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 7,
    name: 'Event 7',
    date: '2021-08-02',
    time: '11:00 AM',
    location: 'Location 2',
    description:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 8,
    name: 'Event 8',
    date: '2021-08-03',
    time: '12:00 PM',
    location: 'Location 3',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 9,
    name: 'Event 9',
    date: '2021-08-04',
    time: '01:00 PM',
    location: 'Location 4',
    description:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 10,
    name: 'Event 10',
    date: '2021-08-05',
    time: '02:00 PM',
    location: 'Location 5',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    image: 'https://via.placeholder.com/150'
  }
]
export default function NewEventRegister() {
  const searchParams = useSearchParams()
  const eventId = searchParams.get('eventId')
  const pathname = useRouter()
  const [pastEvents, setPastEvents] = useState<any[]>([])
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user') || '{}').email === undefined) {
      window.location.href = '/?eventId=' + eventId
    }
  }, [eventId])

  useEffect(() => {
    const events = JSON.parse(
      localStorage.getItem('pastEventsAttended') || '[]'
    )
    setPastEvents(events)
  }, [])

  return pastEvents.find(event => event.id === Number(eventId)) ? (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-3/4 shadow-xl py-8">
        <Typography.Title
          className="flex flex-col items-center justify-center"
          level={3}
        >
          {' '}
          You have already registered for this event with id: {eventId}
          <span
            onClick={() => {
              pathname.push('/dashboard')
            }}
            className="text-blue-500 cursor-pointer hover:text-blue-900"
          >
            Go to Dashboard
          </span>
        </Typography.Title>
      </Card>
    </div>
  ) : newEvents.find(event => event.id === Number(eventId)) ? (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-3/4 shadow-xl py-8">
        {newEvents
          .filter(event => event.id === Number(eventId))
          .map(event => (
            <div key={event.id}>
              <Typography.Title level={3}>{event.name}</Typography.Title>
              <Typography.Text type="secondary">
                {event.date} {event.time}
              </Typography.Text>
              <Typography.Text type="secondary">
                {event.location}
              </Typography.Text>
              <Typography.Paragraph>{event.description}</Typography.Paragraph>
              <Button
                size="large"
                style={{
                  backgroundColor: '#1890ff',
                  color: 'white'
                }}
                onClick={async () => {
                  fetch('/api/hello', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      eventName: event.name,
                      userFullName:
                        JSON.parse(localStorage.getItem('user') || '{}')
                          .firstName +
                        ' ' +
                        JSON.parse(localStorage.getItem('user') || '{}')
                          .lastName,
                      email: JSON.parse(localStorage.getItem('user') || '{}')
                        .email,
                      location: event.location
                    })
                  }).then(response => {
                    if (response.ok) {
                      response.json().then(async data => {
                        if (data.success) {
                          localStorage.setItem(
                            'pastEventsAttended',
                            JSON.stringify([...pastEvents, event])
                          )
                          await message.success('Registration Success')
                          window.location.href = '/dashboard'
                        }
                      })
                    }
                  })
                }}
              >
                Register
              </Button>
            </div>
          ))}
      </Card>
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-3/4 shadow-xl py-8">
        <Typography.Title
          className="flex items-center justify-center"
          level={3}
        >
          {' '}
          This Event does not exist with id: {eventId}
        </Typography.Title>
      </Card>
    </div>
  )
}
