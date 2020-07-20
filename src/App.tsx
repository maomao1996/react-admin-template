import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import RenderRouter from '@/components/RenderRouter'
import { authorizedRoutes, normalRoutes } from '@/routes'
import LoginContainer from '@/store/login'
import { antdConfig } from './config'

const App: React.FC = () => {
  const { isLogin } = LoginContainer.useContainer()

  return (
    <ConfigProvider {...antdConfig}>
      <BrowserRouter>
        <Suspense fallback={null}>
          <RenderRouter routes={isLogin ? authorizedRoutes : normalRoutes} />
        </Suspense>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
