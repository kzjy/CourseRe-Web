import axios from 'axios';
import { GET_REMINDERS, DELETE_REMINDERS, ADD_REMINDERS, GET_COURSES, ADD_COURSES } from './types';
import { createMessage, returnErrors } from './messagesAction';
import { tokenConfig } from './authAction';

// GET REMINDERS
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

// DELETE REMINDERS
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

// POST REMINDERS
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
        dispatch(returnErrors(e.response.data, e.response.status))
    );
}


// GET COURSES
export const getCourses = () => (dispatch, getState) => {
    axios.get('/api/courses/', tokenConfig(getState))
    .then(res => {
        
        dispatch({
            type: GET_COURSES,
            payload: res.data
        })
    })
    .catch(e => dispatch(returnErrors(e.response.data, e.response.status))
    )
}

// DELETE COURSE 
export const deleteCourses = (id) => (dispatch, getState) => {
    axios.delete(`/api/courses/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ reminderDeleted: 'Reminder Deleted'}))
        dispatch({
            type: DELETE_COURSES,
            payload: id
        })
    })
    .catch(e => dispatch(returnErrors(e.response.data, e.response.status))
    )
}

// ADD COURSE
export const addCourses = (course) => (dispatch, getState) => {
    axios.post(`/api/courses/`, course , tokenConfig(getState))
    .then(res => {
        // dispatch(createMessage({ reminderAdded: "Reminder Added"}))
        console.log(res);
        dispatch({
            type: ADD_COURSES,
            payload: res.data
        })
    })
    .catch(e => 
        dispatch(returnErrors(e.response.data, e.response.status))
    );
}

