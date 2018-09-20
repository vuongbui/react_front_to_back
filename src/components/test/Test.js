import React, { Component } from 'react'

class Test extends Component {
    state = {
        title: '',
        body: ''
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(response => response.json())
    .then(data => this.setState({
        title: data.title,
        body: data.body
    }))
    }

    // componentWillMount() {
    //     console.log("componentWillMount")
    // }

    // componentDidUpdate() {
    //     console.log("componentDidUpdate") //Run only when update
    // }

    // componentWillUpdate() {
    //     console.log("componentWillUpdate")
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log("componentWillReceiveProps...")
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return null
    // }

    // getSnapshotBeforeUpdate(prevProps, newState) {
    //     console.log("getSnapShortBeforeUpdate...")
    // }

    render() {
        const {title, body} = this.state
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}

export default Test;