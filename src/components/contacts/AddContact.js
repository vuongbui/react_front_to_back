import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onAddContact = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value})
        console.log(name, "1----", value)
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        const newContact = {
            name,
            email,
            phone
        }

        //Check for errors
        if (name === '') {
            this.setState({errors: {name: 'Name is required'}})
            return
        }

        if (email === '') {
            this.setState({errors: {email: 'Email is required'}})
            return
        }

        if (phone === '') {
            this.setState({errors: {phone: 'Phone number is required'}})
            return
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        
        dispatch({type: 'ADD_CONTACT', payload: res.data});

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

        this.props.history.push('/')
    }


    render() {
        const { name, email, phone, errors } = this.state;
        
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        value={name}
                                        placeholder="Enter name...."
                                        onChange={this.onAddContact}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Enter email...."
                                        onChange={this.onAddContact}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        value={phone}
                                        placeholder="Enter phone...."
                                        onChange={this.onAddContact}
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Add contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;