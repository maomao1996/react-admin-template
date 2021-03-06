import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockTwoTone } from '@ant-design/icons'

import LoginContainer from '@/store/login'

import logo from '@/assets/images/logo.svg'

import './index.scss'

export interface LoginFormData {
  username: string
  password: string
}

// 登录页

const Login: React.FC = () => {
  const login = LoginContainer.useContainer()
  const history = useHistory()

  const handleSubmit = (values: LoginFormData) => {
    console.log(values)
    login.login().then(() => {
      history.push('/home')
    })
  }

  return (
    <div className="login">
      <div className="header is-center">
        <img alt="logo" className="logo" src={logo} />
        <span className="title">React 后台应用</span>
      </div>
      <div className="desc is-center">管理系统 React 应用模版</div>
      <div className="content">
        <Form
          size="large"
          onFinish={(values) => {
            handleSubmit(values as LoginFormData)
          }}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className="login-prefix-icon" />}
              placeholder="请输入用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!'
              }
            ]}
          >
            <Input.Password
              prefix={<LockTwoTone className="login-prefix-icon" />}
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
