import React from 'react'
import { Layout } from 'antd'
import Header from './components/Header'
import Sider from './components/Sider'
import Footer from './components/Footer'

import './AuthorityLayout.scss'

const { Content } = Layout

interface AuthorityLayoutProps {}

const AuthorityLayout: React.FC<AuthorityLayoutProps> = (props) => {
  const { children } = props
  return (
    <Layout className="m-authoritylayout">
      <Sider />
      <Layout>
        <Header />
        <Content className="m-authoritylayout-content">{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  )
}

export default AuthorityLayout
