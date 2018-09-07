import React, { Component } from 'react'
import { List, InputItem, Button } from 'antd-mobile'
import '@assets/css/login.scss'

class Login extends Component {
    componentDidMount() {
        console.log(this.props)

        const { match, history, location, withRouter, matchPath } = this.props

        console.log(match, history, location, withRouter, matchPath)
    }

    render() {
        return (
            <List>
                <InputItem className="p-t-50">账号</InputItem>
                <InputItem className="p-t-50">密码</InputItem>

                <div className="a-block__wrap">
                    <Button
                        type="primary"
                        onClick={() => this.props.history.go(-1)}
                    >
                        登入
                    </Button>
                </div>
            </List>
        )
    }
}

export default Login
