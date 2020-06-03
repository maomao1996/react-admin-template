import React, { useState } from 'react'
import { Layout } from 'antd'
import Header from './components/Header'
import Sider from './components/AuthoritySider'
import Footer from './components/Footer'

import { SIDER_MAX_WIDTH, SIDER_AUTO_SHRINK_WIDTH } from '@/config'

import './AuthorityLayout.scss'

const { Content } = Layout

interface AuthorityLayoutProps {}

const AuthorityLayout: React.FC<AuthorityLayoutProps> = (props) => {
  const { children } = props

  const [collapsed, setCollapsed] = useState<boolean>(
    () => window.innerWidth < SIDER_AUTO_SHRINK_WIDTH
  )

  return (
    <Layout className="m-authoritylayout">
      <Sider
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={SIDER_MAX_WIDTH}
      />
      <Layout
        style={{
          paddingLeft: collapsed ? 80 : SIDER_MAX_WIDTH,
          transition: 'all 0.2s'
        }}
      >
        <Header />
        <Content className="m-authoritylayout-content">{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  )
}

export default AuthorityLayout
