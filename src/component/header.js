import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <ul>
                        <li className={this.props.location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
                        <li className={this.props.location.pathname === "/user" ? "active" : ""}><Link to="/user">User</Link></li>   
                        <li className={this.props.location.pathname === "/about" ? "active" : ""}><Link to="/about">About</Link></li>
                        <li className={this.props.location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
                    </ul>
                </header>
            </React.Fragment>
        )
    }
}

export default withRouter(Header);