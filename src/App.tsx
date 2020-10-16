import React, { Suspense } from 'react'
import { Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import RenderRouter from '@/components/RenderRouter'
import { authorizedRoutes, normalRoutes } from '@/routes'
import history from '@/routes/history'
import LoginContainer from '@/store/login'
import { antdConfig } from './config'

const App: React.FC = () => {
  const { isLogin } = LoginContainer.useContainer()

  return (
    <ConfigProvider {...antdConfig}>
      <Router history={history}>
        <Suspense fallback={null}>
          <RenderRouter routes={isLogin ? authorizedRoutes : normalRoutes} />
        </Suspense>
      </Router>
    </ConfigProvider>
  )
}

export default App
