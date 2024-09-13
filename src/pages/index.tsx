import { Button, Card, Col, Form, Input, message, Row, Typography } from 'antd'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

export default function Home() {
  const pathname = useRouter()
  const searchParams = useSearchParams()
  const eventId = searchParams.get('eventId')

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-3/4 shadow-xl py-8">
        <Form
          onFinish={values => {
            if (
              values.email === 'user@gmail.com' ||
              values.email ===
                JSON.parse(localStorage.getItem('user') || '{}')?.email
            ) {
              pathname.push(`/email?email=${values.email}&eventId=${eventId}`)
              message.success('Email Verified')
            } else {
              message.warning('Email Not Verified.. please Register your Email')
              pathname.push(
                `/register?email=${values.email}&eventId=${eventId}`
              )
            }
          }}
        >
          <Row gutter={[16, 16]} className="flext items-center">
            <Col sm={24} lg={6} className="h-12">
              <Typography.Title level={4}>Verify Your Email</Typography.Title>
            </Col>
            <Col sm={24} lg={18}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!'
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email!'
                  }
                ]}
                name={'email'}
              >
                <Input
                  placeholder="Enter Your Email"
                  className="h-12 px-5 font-mono text-xl"
                />
              </Form.Item>
            </Col>
          </Row>
          <Col span={24} className="flex items-start justify-center">
            <Button htmlType="submit" type="primary">
              Verify
            </Button>
          </Col>
        </Form>
      </Card>
    </div>
  )
}
