import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@emotion/core'
import App from './App'
import { HashRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import px2rem from './plugins/px2rem'

ReactDOM.render(
  <HashRouter>
    <div
      css={{
        width: '100vw',
        height: '100vh',
        padding: px2rem(20)
      }}
    >
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
