import React from 'react'
import { CopyrightOutlined } from '@ant-design/icons'
import { Layout } from 'antd'

const Footer: React.FC = () => {
  return (
    <Layout.Footer className="is-center">
      Copyright <CopyrightOutlined /> 2020 maomao1996 制作
    </Layout.Footer>
  )
}

export default Footer
