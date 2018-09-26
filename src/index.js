import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // 异步数据流中间件

import '@assets/css/index.css'
import 'antd-mobile/dist/antd-mobile.css'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
