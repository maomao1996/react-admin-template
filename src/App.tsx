import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import RenderRouter from '@/routes/RenderRouter'
import { routes, normalRoutes } from '@/routes'
import LoginContainer from '@/store/login'
import { antdConfig } from './config'

const App: React.FC = () => {
  const { isLogin } = LoginContainer.useContainer()

  return (
    <ConfigProvider {...antdConfig}>
      <BrowserRouter>
        <Suspense fallback={null}>
          <RenderRouter routes={isLogin ? routes : normalRoutes} />
        </Suspense>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
