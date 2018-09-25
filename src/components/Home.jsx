import React, { Component, createContext, forwardRef } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '@assets/css/home.scss'
console.log(ReactCSSTransitionGroup)
const ThemeContext = createContext('light')

const ThemeButton = forwardRef((props, ref) => {
    return (
        <ThemeContext.Consumer>
            {theme => {
                return <div ref={ref}>{theme}</div>
            }}
        </ThemeContext.Consumer>
    )
})

class Toolbar extends Component {
    componentDidMount() {
        console.log(this.ThemeButton)
    }
    render() {
        return (
            <div>
                <ThemeButton
                    ref={el => {
                        this.ThemeButton = el
                    }}
                />
            </div>
        )
    }
}

export class Home extends Component {
    constructor(props) {
        super(props)

        this.$router = this.props.history
        this.state = {
            isLogin: false,
            items: ['hello', 'world', 'click', 'me']
        }
        this.handleAdd = this.handleAdd.bind(this)
    }

    componentDidMount() {
        const is_login = this.state.isLogin

        if (!is_login) {
            // this.$router.push('./login')
        }
        console.dir(this.input)
        this.input.focus()
    }

    componentWillUnmount() {
        console.log('unmount')
    }

    handleClick() {
        this.setState({
            isLogin: true
        })
    }

    handleAdd() {
        const newItems = this.state.items.concat([prompt('Enter some text')])
        this.setState({ items: newItems })
    }

    handleRemove(i) {
        let newItems = this.state.items.slice()
        newItems.splice(i, 1)
        this.setState({ items: newItems })
    }
    render() {
        const items = this.state.items.map((item, i) => (
            <div key={item} onClick={() => this.handleRemove(i)}>
                {item}
            </div>
        ))

        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {items}
                </ReactCSSTransitionGroup>
                <input
                    ref={el => {
                        this.input = el
                    }}
                    value="change!"
                    type="button"
                    onClick={this.handleAdd.bind(this)}
                />
                <ThemeContext.Provider value="dark">
                    <Toolbar />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default Home
