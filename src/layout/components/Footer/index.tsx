import React from 'react'
import { CopyrightOutlined } from '@ant-design/icons'
import { Layout } from 'antd'

import './index.scss'

export default () => {
  return (
    <Layout.Footer className="m-footer">
      Copyright <CopyrightOutlined /> 2020
    </Layout.Footer>
  )
}
