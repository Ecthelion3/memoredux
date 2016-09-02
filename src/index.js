import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'

// Note: Plugin needed to use `onTouchTap` prop in components. For more detail go to this site: https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';

import * as reducers from './reducers'

const reducer = combineReducers(reducers)
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f
const enhancer = compose(devTools)

// Note: passing enhancer as the last argument requires redux@>=3.1.0
const store = createStore(reducer, enhancer)

import App from './App'

// Note: At the moment injectTapEventPlugin can only be called once. Put it at the top level of your application, just before you call ReactDOM.render. For more detail go to this site: https://github.com/zilverline/react-tap-event-plugin/issues/47
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
