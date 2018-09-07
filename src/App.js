import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/:user" component={Login} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
