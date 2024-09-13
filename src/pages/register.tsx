import { Button, Card, Col, Divider, Form, Input, Row, Typography } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Register() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const eventId = searchParams.get('eventId')
  const pathname = useRouter()
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-3/4 shadow-xl py-8">
        <Form
          layout="vertical"
          initialValues={{
            email
          }}
          onFinish={value => {
            localStorage.setItem('user', JSON.stringify(value))
            pathname.push(`/email?eventId=${eventId}`)
          }}
        >
          <Row gutter={[16, 16]} className="flex items-center">
            <Col sm={24}>
              <Typography.Title
                level={4}
                className="flex items-center justify-center"
              >
                Hiii, {email}
              </Typography.Title>
              <Typography.Text
                type="secondary"
                className="flex items-center justify-center"
              >
                Register Your Self
              </Typography.Text>
            </Col>
            <Divider />

            <Col sm={24} lg={12} className="flex items-center">
              <Form.Item
                className="w-full"
                style={{
                  marginBottom: 0
                }}
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your firstname!'
                  }
                ]}
                name="firstName"
              >
                <Input
                  className="h-12 px-5 font-mono text-xl"
                  placeholder="Enter Your First Name"
                />
              </Form.Item>
            </Col>
            <Col sm={24} lg={12} className="flex items-center">
              <Form.Item
                className="w-full"
                style={{
                  marginBottom: 0
                }}
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Lastname!'
                  }
                ]}
                name="lastName"
              >
                <Input
                  className="h-12 px-5 font-mono text-xl"
                  placeholder="Enter Your Last Name"
                />
              </Form.Item>
            </Col>
            <Col sm={24} lg={12} className="flex items-center">
              <Form.Item
                className="w-full"
                style={{
                  marginBottom: 0
                }}
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!'
                  }
                ]}
                name="email"
              >
                <Input
                  className="h-12 px-5 font-mono text-xl"
                  placeholder="Enter Your Email"
                />
              </Form.Item>
            </Col>
            <Col sm={24} lg={12} className="flex items-center">
              <Form.Item
                className="w-full"
                style={{
                  marginBottom: 0
                }}
                label="Password"
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
              >
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}
