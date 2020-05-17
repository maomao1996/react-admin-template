import React from 'react'
import { Layout } from 'antd'
import Footer from './components/Footer'

import './NormalLayout.scss'

const { Header, Content } = Layout

interface NormalLayoutProps {}

const NormalLayout: React.FC<NormalLayoutProps> = (props) => {
  const { children } = props
  return (
    <Layout className="m-normallayout">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  )
}

export default NormalLayout
