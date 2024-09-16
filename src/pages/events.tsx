import { Card, Col, Row, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { newEvents } from './newEventRegister'

export default function Events() {
  const pathname = useRouter()
  return (
    <div className="p-5">
      <div className="flex items-center justify-center mt-7">
        <Row gutter={[25, 25]} className="w-3/4">
          <Typography.Title
            className="px-3"
            style={{
              color: 'red'
            }}
            level={5}
          >
            Events
          </Typography.Title>
          {newEvents?.map((event: any) => (
            <Col xs={24} key={event.id}>
              <Card
                hoverable
                onClick={() => {
                  pathname.push(`/newEventRegister?eventId=${event.id}`)
                }}
              >
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
