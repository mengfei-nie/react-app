import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, InputItem, Button } from 'antd-mobile'
import '@assets/css/login.scss'

class Login extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    componentWillUpdate(a) {
        console.log(a)
    }
    render() {
        return (
            <List>
                <InputItem defaultValue={this.props.phone} className="p-t-50">
                    账号 {this.props.password}
                </InputItem>
                <InputItem
                    className="p-t-50"
                    value={this.props.password}
                >
                    密码
                </InputItem>

                <div className="a-block__wrap">
                    <Button
                        type="primary"
                        // onClick={() => this.props.history.push('/', { a: 1 })}
                        onClick={this.props.handleClick}
                    >
                        登入
                    </Button>
                </div>
            </List>
        )
    }
}

const rename = (id)=>{
    return {
        type: 'rename',
        text: '987654'
    }
}

// 组件和redux 连接
export default connect(
    (state, ownProps) => {
        console.log(state)
        return state
    },
    (dispatch, ownProps) => {
        return {
            handleClick:id=>dispatch(rename(id))
        }
    }
)(Login)
