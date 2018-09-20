import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    onEditContact = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value})
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

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

        const updateContact = {
            name,
            email,
            phone
        }

        const { id } = this.props.match.params;

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);
        
        dispatch({type: 'UPDATE_CONTACT', payload: res.data});

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
                            <div className="card-header">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        value={name}
                                        placeholder="Enter name...."
                                        onChange={this.onEditContact}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="Enter email...."
                                        onChange={this.onEditContact}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        value={phone}
                                        placeholder="Enter phone...."
                                        onChange={this.onEditContact}
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Update contact"
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

export default EditContact;