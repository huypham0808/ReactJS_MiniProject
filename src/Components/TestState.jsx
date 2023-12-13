import React, { Component } from 'react'

export default class TestState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    getTime = () => {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    render() {
        return (
            <>
                <div>It is {this.state.time}</div>
                <button onClick={this.getTime}>Get Time</button>
            </>
        )
    }
}
