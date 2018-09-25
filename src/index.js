import React from 'react'
import ReactDOM from 'react-dom'
import '@assets/css/index.css'
import 'antd-mobile/dist/antd-mobile.css'
import App from './App'
import { Provider } from 'react-redux'

import { createStore } from 'redux'

const reducer = (prevState = { phone: 13237152485, password: 123456 }) => {
    return prevState
}

const store = createStore(reducer)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
