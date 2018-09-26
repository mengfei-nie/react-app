import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }
    render() {
        const { isLogin } = this.state

        return isLogin || this.props.location.pathname === '/login' ? (
            <Route {...this.props} />
        ) : (
            <Redirect to="/login" />
        )
    }
}

export default PrivateRoute
