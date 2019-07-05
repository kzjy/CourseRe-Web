import { GET_REMINDERS, DELETE_REMINDERS } from '../actions/types.js';

const initialState = {
    reminders: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_REMINDERS:
            return {
                ...state, 
                reminders: action.payload
            }
        case DELETE_REMINDERS:
            return {
                ...state,
                reminders: state.reminders.filter(reminder => reminder.id !==
                    action.payload)
            }
        default:
            return state;
    }
}