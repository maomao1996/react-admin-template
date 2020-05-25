import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Dropdown, Avatar, Menu } from 'antd'
import { ClickParam } from 'antd/es/menu'
import { LogoutOutlined } from '@ant-design/icons'
import LoginContainer from '@/store/login'
import Logo from '@/assets/images/logo.svg'

import './index.scss'

const { Header } = Layout

export default () => {
  const { logout, userInfo } = LoginContainer.useContainer()
  const history = useHistory()
  const onMenuClick = ({ key }: ClickParam) => {
    switch (key) {
      case 'logout':
        logout().then(() => {
          history.push('/login')
        })
        break
      default:
        break
    }
  }

  const menu = (
    <Menu selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="logout">
        <LogoutOutlined />
        注销
      </Menu.Item>
    </Menu>
  )

  return (
    <Header className="m-header">
      <div className="fr">
        <Dropdown overlay={menu}>
          <div className="m-header-item">
            <Avatar size="small" src={Logo} alt="avatar" />
            <span className="usename"></span>
            {userInfo.nickname}
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}
