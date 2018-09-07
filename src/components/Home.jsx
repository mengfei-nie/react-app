import React, { Component } from 'react'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.$router = this.props.history
        this.state = {
            isLogin: false
        }
    }

    componentDidMount() {
        const is_login = this.state.isLogin

        if (!is_login) {
            this.$router.push('./login')
        }
    }

    render() {
        return <div>hello world </div>
    }
}

export default Home
