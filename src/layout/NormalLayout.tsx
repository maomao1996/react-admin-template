import React from 'react'
import { Layout } from 'antd'
import Footer from './components/Footer'

import './NormalLayout.scss'

const { Content } = Layout

interface NormalLayoutProps {}

const NormalLayout: React.FC<NormalLayoutProps> = (props) => {
  const { children } = props
  return (
    <Layout className="m-normallayout">
      <Content className="m-normallayout-content">{children}</Content>
      <Footer />
    </Layout>
  )
}

export default NormalLayout
