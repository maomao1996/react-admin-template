import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from '@/components/ErrorBoundary'
import NormalLayout from '@/layout/NormalLayout'
import App from './layout/App'

import * as serviceWorker from './serviceWorker'

import '@/styles/index.scss'

ReactDOM.render(
  <ErrorBoundary>
    <NormalLayout>
      <App />
    </NormalLayout>
  </ErrorBoundary>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
