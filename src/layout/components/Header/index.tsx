import React from 'react'
import { Layout, Dropdown , Avatar, Menu } from 'antd'
import { LogoutOutlined } from '@ant-design/icons';
import Logo from '@/assets/images/logo.svg'

import './index.scss'

const { Header } = Layout

export default () => {

  const onMenuClick = () => {

  }

  const menu = (
    <Menu selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="m-header">
      <div className="fr">
        <Dropdown overlay={menu}>
          <div className="m-header-item">
            <Avatar size="small" src={Logo} alt="avatar" />
            <span className="usename"></span>
            maomao
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}
