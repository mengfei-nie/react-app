import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, InputItem, Button } from 'antd-mobile'
import '@assets/css/login.scss'

class Login extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <List>
                <InputItem defaultValue={this.props.phone} className="p-t-50">
                    账号
                </InputItem>
                <InputItem
                    className="p-t-50"
                    defaultValue={this.props.password}
                >
                    密码
                </InputItem>

                <div className="a-block__wrap">
                    <Button
                        type="primary"
                        onClick={() => this.props.history.push('/', { a: 1 })}
                    >
                        登入
                    </Button>
                </div>
            </List>
        )
    }
}

// 组件和redux 连接
export default connect(
    (state, ownProps) => {
        console.log(state, ownProps)
        return state
    },
    // (dispatch, ownProps) => {
    //     console.log(dispatch, ownProps)
    //     return dispatch
    // }
)(Login)
// export default Login
