import { Card, Col, Row, Typography } from 'antd'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [pastEvents, setPastEvents] = useState<any[]>([])

  useEffect(() => {
    const events = JSON.parse(
      localStorage.getItem('pastEventsAttended') || '[]'
    )
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
          {pastEvents.length &&
            pastEvents?.map((event: any) => (
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
