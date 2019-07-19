import axios from 'axios';
import { GET_REMINDERS, DELETE_REMINDERS, ADD_REMINDERS, GET_ERRORS } from './types';
import { createMessage, returnErrors } from './messagesAction';
import { tokenConfig } from './authAction';

// get the reminders 
export const getReminders = () => (dispatch, getState) => {
    axios.get('/api/reminders/', tokenConfig(getState))
    .then(res => {
        
        dispatch({
            type: GET_REMINDERS,
            payload: res.data
        })
    })
    .catch(e => dispatch(returnErrors(e.response.data, e.response.status))
    )
}

// delete reminders 
export const deleteReminders = (id) => (dispatch, getState) => {
    axios.delete(`/api/reminders/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ reminderDeleted: 'Reminder Deleted'}))
        dispatch({
            type: DELETE_REMINDERS,
            payload: id
        })
    })
    .catch(e => dispatch(returnErrors(e.response.data, e.response.status))
    )
}

// post reminders 
export const addReminders = (reminder) => (dispatch, getState) => {
    axios.post(`/api/reminders/`, reminder, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ reminderAdded: "Reminder Added"}))
        dispatch({
            type: ADD_REMINDERS,
            payload: res.data
        })
    })
    .catch(e => 
        // console.log('found error')
        // const error = {
        //     message: e.response.data,
        //     status: e.response.status
        // }
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: error
        // })
        dispatch(returnErrors(e.response.data, e.response.status))
    );
}