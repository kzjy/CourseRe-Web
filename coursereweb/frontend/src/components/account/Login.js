import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { login } from "../../actions/authAction";

export class Login extends Component {

    state = {
        email: '',
        password: '',

    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password)
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

        const { email, password} = this.state;
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
            
            {/*  SIGN IN CARD */}
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 row h-100 mx-auto justify-content-center align-items-center" style={{zIndex:'99'}} >
              <div className="card card-body my-auto w-25 mw-25" style={{backgroundColor:'rgba(255,255,255,0.7)'}} >
                <h2 className="text-center text-primary mt-3 mb-5">SIGN IN</h2>
                <form onSubmit={this.onSubmit}>
                  
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
                  
                  <hr className=""/>
                  
                  {/* SUBMIT BUTTON  */}
                  <div className="form-group" style={{textAlign: 'center'}}>
                    <button type="submit" className="btn btn-primary btn-large btn-block ml-auto mr=auto" style={{width:'100%'}}>
                      Login
                    </button>
                  </div>

                  {/* LINK TO SIGN UP */}
                  <p>
                    Don't have an account? <Link to="/register">Register</Link>
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

export default connect(mapStateToProps, {login} )(Login);
