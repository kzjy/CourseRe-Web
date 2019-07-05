import axios from 'axios';
import { GET_REMINDERS, DELETE_REMINDERS } from './types';

// get the reminders 
export const getReminders = () => dispatch => {
    axios.get('/api/reminders/')
    .then(res => {
        dispatch({
            type: GET_REMINDERS,
            payload: res.data
        })
    })
    .catch(e => console.log(e))
}

// delete reminders 
export const deleteReminders = (id) => dispatch => {
    axios.delete(`/api/reminders/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_REMINDERS,
            payload: id
        })
    })
    .catch(e => console.log(e))
}