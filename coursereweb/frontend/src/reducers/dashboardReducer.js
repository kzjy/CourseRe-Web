import { CHANGE_SELECTED } from '../actions/types';

const initialState = {
    selected: null,
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_SELECTED:
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state
    }
}