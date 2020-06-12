import React from 'react'
import ReactDOM from 'react-dom'
import { Spin } from 'antd'
import { isHidden } from '@/utils'

import './index.scss'

function Loading(props: React.ComponentProps<typeof Spin>) {
  return (
    <div className="global-loading">
      <Spin size="large" tip="数据加载中..." {...props} />
    </div>
  )
}

let dom: HTMLElement | null
const GlobalLoading = {
  open(props: React.ComponentProps<typeof Spin> = {}): void {
    if (!dom) {
      dom = document.createElement('div')
      ReactDOM.render(<Loading {...props} />, dom)
      document.body.appendChild(dom)
    }
    if (isHidden(dom)) {
      dom.style.display = ''
    }
  },
  close(): void {
    dom!.style.display = 'none'
  },
  remove(): void {
    ReactDOM.unmountComponentAtNode(dom!)
    document.body.removeChild(dom!)
    dom = null
  }
}

export default GlobalLoading
