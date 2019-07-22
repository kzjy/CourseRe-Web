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
            <div className="collapse navbar-collapse" id="navbarColor01">

            
            <ul className="navbar-nav mr-auto ">
                <li className={"nav-item " + this.props.home}>
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className={"nav-item " + this.props.dashboard}>
                    <a className="nav-link" href="#/dashboard">Dashboard <span className="sr-only">(current)</span></a>
                </li>
                <li className={"nav-item " + this.props.calendar}>
                    <a className="nav-link" href="#/calendar">Calendar <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ">
                    
                </li>
            </ul>
            <button className="nav-link btn btn-secondary btn-sm text-light ml-auto" 
                            onClick={this.props.logout}>Logout</button>
            </div>

        )

        const guestLinks = (
            <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li> */}
                <li className="nav-item active">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                
            </ul>
            </div>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                        Course: Re
                    </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* NAVBAR LINKS  */}
                { isAuthenticated ? authLinks : guestLinks}
                
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, { logout })(Header);
