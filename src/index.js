import React from 'react'
import ReactDOM from 'react-dom'
import '@assets/css/index.css'
import 'antd-mobile/dist/antd-mobile.css'
import App from './App'
import { Provider } from 'react-redux'

import { createStore } from 'redux'

const reducer = (prevState = { phone: 13237152485, password: 123456 },action) => {
    switch (action.type) {
        case 'rename':
            console.log( {...prevState,password: action.text})
            return {...prevState,password: action.text}
    }
    return prevState
}

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
