import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import RenderRouter from '@/routes/RenderRouter'
import { routes } from '@/routes'
import LoginContainer from '@/store/login'
import { antdConfig } from './config'

function App() {
  return (
    <LoginContainer.Provider>
      <ConfigProvider {...antdConfig}>
        <BrowserRouter>
          <Suspense fallback={null}>
            <RenderRouter routes={routes} />
          </Suspense>
        </BrowserRouter>
      </ConfigProvider>
    </LoginContainer.Provider>
  )
}

export default App
