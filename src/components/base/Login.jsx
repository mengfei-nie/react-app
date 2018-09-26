import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, InputItem, Button } from 'antd-mobile'
import '@assets/css/login.scss'
import { fetchBanner, clickLogin } from '../../store/action'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: props.password
        }
        this.handleChange = this.handleChange.bind(this)
    }
    UNSAFE_componentWillMount() {
        this.props.fetchBanner()
    }
    UNSAFE_componentWillReceiveProps(nextProps, nextState) {
        this.setState({
            password: nextProps.password
        })
    }
    handleChange(val) {
        this.setState({
            password: val
        })
    }
    render() {
        return (
            <React.Fragment>
                <List>
                    <InputItem
                        defaultValue={this.props.phone}
                        className="p-t-50"
                    >
                        账号
                    </InputItem>
                    <InputItem
                        className="p-t-50"
                        value={this.state.password}
                        onChange={this.handleChange}
                    >
                        密码
                    </InputItem>

                    <div className="a-block__wrap">
                        <Button type="primary" onClick={this.props.handleClick}>
                            登入
                        </Button>
                    </div>
                </List>
                <div className="banner">
                    {this.props.list.map((item, i) => {
                        return <img width="100%" src={item.bannerImg} key={i} />
                    })}
                </div>
            </React.Fragment>
        )
    }
}

// 组件和redux 连接
export default connect(
    (state, ownProps) => {
        return state.login
    },
    (dispatch, ownProps) => {
        return {
            fetchBanner: () => dispatch(fetchBanner()),
            handleClick: () => dispatch(clickLogin)
        }
    }
)(Login)
