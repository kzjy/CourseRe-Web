import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { register } from "../../actions/authAction";
import { createMessage } from "../../actions/messagesAction";

export class Register extends Component {

    state = {
        first_name: '',
        email: '',
        password: '',
        password2: '',

    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
    }

    onSubmit = e => {
        e.preventDefault();
        const { password, password2 } = this.state
        if (password !== password2) {
            this.props.createMessage({
                passwordNotMatch: "Passwords do not match"
            })
        } else {
            const {first_name, email, password} = this.state;
            const user = {
                username: email,
                email: email,
                password: password,
                first_name: first_name
            };
            this.props.register(user);
        }
    }


    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {

        if (this.props.isAuthenticated) {
            return (
                <Redirect to="/"/>
            )
        }
        
        const {first_name, email, password, password2} = this.state;
        return (
          <div style={{
            //  BACKGROUND
            className: 'container',
            position: 'fixed',
            width:'100%',
            height: '100%',
            zIndex: '-99',
            backgroundColor: 'rgba(255, 255, 255, 0)', 
            backgroundBlendMode: 'overlay',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: 'url(../../static/frontend/resources/register_bg.jpg)'}}>

            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 row h-100 mx-auto justify-content-center align-items-center" >
            <div className="card card-body mt-5" style={{backgroundColor:'rgba(255,255,255,0.7)'}}>
              <h2 className="text-center text-primary mt-3 mb-5">SIGN UP</h2>
              <form onSubmit={this.onSubmit}>

                {/* NAME */}
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    onChange={this.onChange}
                    value={first_name}
                  />
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                  />
                </div>

                {/* PASSWORD */}
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    onChange={this.onChange}
                    value={password2}
                  />
                </div>

                <hr/>

                {/* SIGN UP */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-large btn-block ml-auto mr=auto">
                    Register
                  </button>
                </div>

                {/* LINK TO LOG IN */}
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
          </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps, {register, createMessage } )(Register);
