import React from 'react'
import { Layout } from 'antd'
import Footer from './components/Footer'

import './BasisLayout.scss'

const { Content } = Layout

interface BasicLayoutProps {

}

const BasisLayout: React.FC<BasicLayoutProps> = (props)=> {
  const { children } = props
  return (
    <Layout className="m-basislayout">
      <Content>{children}</Content>
      <Footer />
    </Layout>
  )
}

export default BasisLayout
