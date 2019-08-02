import { SELECT_ACTIVE, TOGGLE_NAVBAR, UPDATE_WINDOW, HIDE_NAVBAR} from './types';

// Toggle navbar 
export const toggleNavbar = () => (dispatch) => {
    dispatch({
        type: TOGGLE_NAVBAR
    })
};

// Change selected element
export const selectActive = (selected) => (dispatch) => {
    dispatch({
        type: SELECT_ACTIVE,
        payload: selected
    })
}

// Update window size 
export const updateWindow = (width) => (dispatch) => {
    dispatch({
        type: UPDATE_WINDOW,
        payload: width
    })
}

// Hide navbar 
export const hideNavbar = () => (dispatch) => {
    dispatch ({
        type: HIDE_NAVBAR,
    })
}