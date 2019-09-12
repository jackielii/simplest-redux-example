import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/user">User</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;