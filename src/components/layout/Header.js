import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header (props) {
    const { branding } = props;
    return (
        <nav className="navbar navbar-dark bg-danger">
            <div className="container">
            <a href="/" className="navbar-brand">{branding}</a>
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <i className="fas fa-home"/> Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact/add" className="nav-link">
                        <i className="fas fa-plus"/> Add
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        <i className="fas fa-question"/> About
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

Header.defaultProps = {
    branding: "My App"
}

export default Header;