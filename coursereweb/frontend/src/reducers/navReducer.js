import { SELECT_ACTIVE, TOGGLE_NAVBAR, UPDATE_WINDOW } from '../actions/types'

const initialState = {
    // location: null,
    // history: null,
    open: true,
    active: "",
    window: 0,
}

export default function(state = initialState, action) {
    switch(action.type) {
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