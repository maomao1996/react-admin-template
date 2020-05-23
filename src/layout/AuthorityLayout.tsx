import React, { useState } from 'react'
import { Layout } from 'antd'
import Header from './components/Header'
import Sider from './components/AuthoritySider'
import Footer from './components/Footer'

import './AuthorityLayout.scss'

const { Content } = Layout

const SiderWidth: number = 260

interface AuthorityLayoutProps {}

const AuthorityLayout: React.FC<AuthorityLayoutProps> = (props) => {
  const { children } = props

  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <Layout className="m-authoritylayout">
      <Sider
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={SiderWidth}
      />
      <Layout style={{ paddingLeft: collapsed ? 80 : SiderWidth }}>
        <Header />
        <Content className="m-authoritylayout-content">{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  )
}

export default AuthorityLayout
