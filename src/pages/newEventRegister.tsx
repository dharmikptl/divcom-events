import { Button, Card, message, Typography } from 'antd'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { pastEventsAttended } from './dashboard'

export const newEvents = [
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
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user') || '{}').email === undefined) {
      window.location.href = '/?eventId=' + eventId
    }
  }, [eventId])

  return pastEventsAttended.find(event => event.id === Number(eventId)) ? (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-3/4 shadow-xl py-8">
        <Typography.Title
          className="flex items-center justify-center"
          level={3}
        >
          {' '}
          You was Already attended this event: {eventId}
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
                            JSON.stringify([...pastEventsAttended, event])
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
          This Event Is not exist: {eventId}
        </Typography.Title>
      </Card>
    </div>
  )
}
