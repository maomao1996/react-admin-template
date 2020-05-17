import React, {Suspense} from 'react'
import { BrowserRouter } from 'react-router-dom'
import RenderRouter from '@/routes/RenderRouter'
import { routes } from '@/routes'

function App(){
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <RenderRouter routes={routes}/>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
