import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import '@assets/css/index.css'

import Home from '@components/Home'
import Login from '@components/base/Login'

class App extends Component {
    render() {
        return (
            <Router
                getConfirmation={function(message, callback) {
                    console.log(message, callback)
                    callback()
                }}
            >
                <div>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute path="/login" component={Login} />
                        <PrivateRoute path="/:user" component={Login} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
