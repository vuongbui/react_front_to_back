import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        name: "Vuong",
        age: 33
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                growAYearOlder: () => this.setState({age: this.state.age + 1})
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


class Person extends Component {
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p>I am inside a Consumer. The context value is {context.state.name}</p>
                            <p>The age value is {context.state.age}</p>
                            <button onClick={context.growAYearOlder}>Age plus 1</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <MyProvider>
                <Person />
            </MyProvider>
        )
    }
}

export default App;