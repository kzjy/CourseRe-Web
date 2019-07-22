import axios from 'axios';
import { returnErrors } from './messagesAction';
import { getCourses, getReminders} from './reminderAction';
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS} from './types';


// load user 
export const loadUser = () => (dispatch, getState) => {
    // user loading 
    dispatch({type: USER_LOADING});

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
            dispatch(getReminders());
            dispatch(getCourses());
        }).catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
};

// login user 
export const login = (email, password) => dispatch => {

    // header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // request
    const request = JSON.stringify({
        username: email,
        password: password
    });


    axios.post('/api/auth/login', request, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            dispatch(getReminders());
            dispatch(getCourses());
        }).catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch({
                type: LOGIN_FAIL
            });
        })
};

// REGISTER USER 
export const register = ({ first_name, email, password }) => dispatch => {


    // header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // request
    const request = JSON.stringify({
        username: email,
        email: email,
        password: password,
        first_name: first_name
    });


    axios.post('/api/auth/register', request, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            dispatch(getReminders());
            dispatch(getCourses());
        }).catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch({
                type: REGISTER_FAIL
            });
        })
};



// logout 
export const logout = () => (dispatch, getState) => {

    // get token 
    const token = getState().authReducer.token;

    // header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // add token to header 
    if (token) {
        config.headers['Authorization'] =  `Token ${token}`;
    }
 

    axios.post('/api/auth/logout/', null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS,
            })
        }).catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
        })
};


// set up config 
export const tokenConfig = (getState) => {
    // get token 
    const token = getState().authReducer.token;

    // header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // add token to header 
    if (token) {
        config.headers['Authorization'] =  `Token ${token}`;
    }

    return config
}