import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './app/store/configureStore'
import RootApp from './app/shell/containers/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const store = configureStore
const rootContainer = document.getElementById('root')

const App = () => (
    <MuiThemeProvider>
      <Provider store = {store}>
        <RootApp/>
      </Provider>
    </MuiThemeProvider>
)

render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    rootContainer
)