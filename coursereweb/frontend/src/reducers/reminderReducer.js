import { GET_REMINDERS, DELETE_REMINDERS, ADD_REMINDERS } from '../actions/types.js';

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
        case ADD_REMINDERS:
            return {
                ...state,
                reminders: [...state.reminders, action.payload]
            }
        default:
            return state;
    }
}