import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RenderRouter from '@/routes/RenderRouter'
import { routes } from '@/routes'
import LoginContainer from '@/store/login'

function App() {
  return (
    <LoginContainer.Provider>
      <BrowserRouter>
        <Suspense fallback={null}>
          <RenderRouter routes={routes} />
        </Suspense>
      </BrowserRouter>
    </LoginContainer.Provider>
  )
}

export default App
