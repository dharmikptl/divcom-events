import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PartitionOutlined,
  UploadOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Button, Col, Layout, Menu, Row, theme } from 'antd'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'

const { Header, Sider, Content } = Layout

const App: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <img src={dharmik} alt="" className="h- border rounded-full" /> */}
        <Menu theme="dark" mode="inline" className="py-3">
          <Menu.Item>
            <Link href="/">PV</Link>
          </Menu.Item>
          <Menu.Item icon={<HomeOutlined />}>
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<PartitionOutlined />}>
            <Link href="/student/student">Student</Link>
          </Menu.Item>
          <Menu.Item icon={<UploadOutlined />}>
            <Link href="/nav3">Nav 3</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="flex"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Row className="w-full flex justify-between px-8">
            <Col>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
            </Col>
            <Col>
              {/* <img src={logo} alt="" className="w-60 py-3" /> */}
              <h1 className="text-3xl pt-3">KMPVM</h1>
            </Col>
            <Col>
              <UserOutlined />
            </Col>
          </Row>
        </Header>
        <Content className="h-screen">{children}</Content>
      </Layout>
    </Layout>
  )
}

export default App
