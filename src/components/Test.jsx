import React from 'react'

import { withRouter } from 'react-router-dom'

import { createStore, combineReducers } from 'redux'

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECRMENT':
            return state - 1
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case 'add':
            return [...state, { hello: 'world' }]
        default:
            return [...state]
    }
}

function addIncrement() {
    return {
        type: 'INCREMENT'
    }
}

const reducer = combineReducers({ todos, counter })

let store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState(), 'subscribe')
})

store.dispatch({ type: 'INCREMENT' })

store.dispatch(addIncrement())

export default withRouter(({ history, location, match }) => {
    console.log(this.props)
    return <div>hello</div>
})

// export default class extends Component {
//     render() {
//         console.log(this.props)
//         return <div>hello test</div>
//     }
// }
