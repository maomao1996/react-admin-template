import React, { Component } from 'react'
import { Result } from 'antd'

// 用于捕获渲染时错误的组件

class ErrorBoundary extends Component {
  state = {
    error: null
  }

  static getDerivedStateFromError(error: unknown): unknown {
    return { error }
  }

  render(): React.ReactNode {
    if (this.state.error) {
      return (
        <Result
          status="error"
          title="哎呀, 加载出错啦!"
          subTitle="大事不妙啦！你访问的页面好像被玩坏了~"
        ></Result>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
