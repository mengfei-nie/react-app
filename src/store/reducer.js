import { combineReducers } from 'redux'
import { CLICK_LOGIN, BANNER_LIST } from './action'

const login = (
    state = { phone: 13237152485, password: 123456, list: [] },
    action
) => {
    switch (action.type) {
        case CLICK_LOGIN:
            return { ...state, password: action.text }
        case BANNER_LIST:
            return { ...state, list: action.list }
        default:
            return state
    }
}

export default combineReducers({ login })
