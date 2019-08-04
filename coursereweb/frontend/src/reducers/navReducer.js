import { SELECT_ACTIVE, TOGGLE_NAVBAR, UPDATE_WINDOW, HIDE_NAVBAR } from '../actions/types'

const initialState = {
    // location: null,
    // history: null,
    open: false,
    active: "",
    window: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        case HIDE_NAVBAR:
            return {
                ...state,
                open: false
            }
        case TOGGLE_NAVBAR:
            return {
                ...state,
                open: !state.open
            }
        case SELECT_ACTIVE:
            return {
                ...state,
                active: action.payload
            }
        case UPDATE_WINDOW:
            return {
                ...state,
                window: action.payload
            }
        default: 
            return state
    }
}