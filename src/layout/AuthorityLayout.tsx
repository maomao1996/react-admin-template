import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'
import Footer from './components/Footer'

import './AuthorityLayout.scss'

const { Header, Sider, Content } = Layout

interface AuthorityLayoutProps {}

const AuthorityLayout: React.FC<AuthorityLayoutProps> = (props) => {
  const { children } = props
  return (
    <Router>
      <Layout className="m-authoritylayout">
        <Sider />
        <Layout>
          <Header />
          <Content>{children}</Content>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  )
}

export default AuthorityLayout
