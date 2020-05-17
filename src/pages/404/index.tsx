import React from 'react'
import { Result } from 'antd'

const NotFound: React.FC<{}> = () => (
  <Result
    status="404"
    title="404"
    subTitle="大事不妙啦！你访问的页面被弄丢了"
  />
)

export default NotFound
