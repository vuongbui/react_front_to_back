import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
            case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "Vuong Bui",
                email: "vuong@gmail.com",
                phone: "444-444-555"
            },
            {
                id: 2,
                name: "Mai Tran",
                email: "mai@gmail.com",
                phone: "444-444-666"
            },
            {
                id: 3,
                name: "Sam Bui",
                email: "sam@gmail.com",
                phone: "444-444-777"
            },
            {
                id: 4,
                name: "Su Bui",
                email: "su@gmail.com",
                phone: "444-444-888"
            }
        ],
        dispatch: action => this.setState(state => 
        reducer(state, action))
        
    }

    render () {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;