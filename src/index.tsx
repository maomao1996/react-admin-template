import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Inspector } from 'react-dev-inspector'

import ErrorBoundary from '@/components/ErrorBoundary'
import App from './App'
import LoginContainer from '@/store/login'

import * as serviceWorker from './serviceWorker'

import '@/styles/index.scss'

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : Fragment

ReactDOM.render(
  <InspectorWrapper keys={['command', 'shift', 'a']}>
    <ErrorBoundary>
      <LoginContainer.Provider>
        <App />
      </LoginContainer.Provider>
    </ErrorBoundary>
  </InspectorWrapper>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
