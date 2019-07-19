import axios from 'axios';
import { returnErrors } from './messagesAction';
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from './types';

export const loadUser = () => (dispatch, getState) => {
    // user loading 
    dispatch({type: USER_LOADING});


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


    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status));
            dispatch({
                type: AUTH_ERROR
            })
        })
}