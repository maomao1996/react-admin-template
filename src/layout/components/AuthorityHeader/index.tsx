import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Dropdown, Avatar, Menu, Modal } from 'antd'
import { LogoutOutlined, GithubOutlined } from '@ant-design/icons'
import LoginContainer from '@/store/login'
import Logo from '@/assets/images/logo.svg'

import './index.scss'

interface ClickEvent {
  key: React.Key
  keyPath: React.Key[]
  item: React.ReactInstance
  domEvent: React.MouseEvent<HTMLElement>
}

const AuthorityHeader: React.FC = () => {
  const { logout, userInfo } = LoginContainer.useContainer()

  const history = useHistory()

  const onMenuClick = ({ key }: ClickEvent) => {
    switch (key) {
      case 'logout':
        Modal.confirm({
          title: '注销',
          content: '确定要退出系统吗?',
          okText: '确定',
          cancelText: '取消',
          onOk: () => {
            logout().then(() => {
              history.push('/login')
            })
          }
        })
        break
      case 'github':
        window.open('https://github.com/maomao1996/react-admin-template')
        break
      default:
        break
    }
  }

  const menu = (
    <Menu selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="github">
        <GithubOutlined />
        项目地址
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined />
        注销
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout.Header className="m-header">
      <div className="fr">
        <Dropdown overlay={menu}>
          <div className="m-header-item">
            <Avatar size="small" src={Logo} alt="avatar" />
            <span className="usename"></span>
            {userInfo?.nickname}
          </div>
        </Dropdown>
      </div>
    </Layout.Header>
  )
}

export default AuthorityHeader
