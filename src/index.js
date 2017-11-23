import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './app/shell/configureStore'
import App from './app/shell/App'

const store = configureStore
const rootContainer = document.getElementById('root')

render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  rootContainer
)