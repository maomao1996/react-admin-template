import React from 'react'
import { useHistory } from 'react-router-dom'
import { Layout, Dropdown, Avatar, Menu, Modal } from 'antd'
import { MenuInfo } from 'rc-menu/es/interface'
import {
  LogoutOutlined,
  GithubOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined
} from '@ant-design/icons'
import { useFullscreen } from 'ahooks'

import LoginContainer from '@/store/login'

import Logo from '@/assets/images/logo.svg'

import './index.scss'

const AuthorityHeader: React.FC = () => {
  const { logout, userInfo } = LoginContainer.useContainer()

  const [isFullscreen, { toggleFull }] = useFullscreen(document.body)

  const history = useHistory()

  const onMenuClick = ({ key }: MenuInfo) => {
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
      <div className="m-header-r fr">
        <div className="m-header-item" style={{ fontSize: '20px' }} onClick={toggleFull}>
          {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        </div>
        <Dropdown overlay={menu}>
          <div className="m-header-item">
            <Avatar size="small" src={Logo} alt="avatar" />
            <span className="username"></span>
            {userInfo?.nickname}
          </div>
        </Dropdown>
      </div>
    </Layout.Header>
  )
}

export default AuthorityHeader
