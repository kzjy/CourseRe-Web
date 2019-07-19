import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../../actions/authAction";


export class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto ">
                {/* <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li> */}
                <span className="navbar-text mr-3">
                    <strong>
                        { user ? `Welcome, ${user.first_name}` : ""}
                    </strong>
                </span>
                <li className="nav-item">
                    <button className="nav-link btn btn-secondary btn-sm text-light" 
                            onClick={this.props.logout}>Logout</button>
                </li>
            </ul>

        )

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li> */}
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        login
                    </Link>
                </li>
                
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                        Course: Re
                    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    
                    { isAuthenticated ? authLinks : guestLinks}
                    
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, { logout })(Header);
