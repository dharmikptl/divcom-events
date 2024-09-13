import { Button, Card, Col, Form, Input, message, Row, Typography } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'
export default function Email() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const eventId = searchParams.get('eventId')
  const pathname = useRouter()

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-3/4 shadow-xl py-8">
        <Form
          onFinish={value => {
            if (
              value.password === 'user@1234' ||
              value.password ===
                JSON.parse(localStorage.getItem('user') || '{}').password
            ) {
              if (eventId === 'null' || eventId === null) {
                pathname.push('/dashboard')
                message.success('Login Success')
              } else {
                pathname.push(`/newEventRegister?eventId=${eventId}`)
                message.success('Login Success')
              }
            } else {
              message.warning('invalid password')
            }
          }}
        >
          <Row gutter={[16, 16]} className="flex items-center">
            <Col sm={24} lg={10}>
              <Typography.Title level={4}>
                Hiii,{' '}
                {email
                  ? email
                  : JSON.parse(localStorage.getItem('user') || '{}').email}
              </Typography.Title>
              <Typography.Text type="secondary">
                Verify Your Password
              </Typography.Text>
            </Col>
            <Col sm={24} lg={14} className="flex items-center">
              <Form.Item
                className="w-full"
                style={{
                  marginBottom: 0
                }}
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!'
                  }
                ]}
                name="password"
              >
                <Input.Password
                  className="h-12 px-5 font-mono text-xl"
                  placeholder="Enter Your Password"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="mt-5">
            <Col span={24} className="flex items-start justify-center">
              <Button
                size="large"
                htmlType="submit"
                style={{
                  backgroundColor: '#1890ff',
                  color: 'white'
                }}
                type="primary"
              >
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}
