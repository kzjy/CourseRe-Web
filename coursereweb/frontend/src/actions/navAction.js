import { SELECT_ACTIVE, TOGGLE_NAVBAR, UPDATE_WINDOW} from './types';

export const toggleNavbar = () => (dispatch) => {
    dispatch({
        type: TOGGLE_NAVBAR
    })
};

export const selectActive = (selected) => (dispatch) => {
    dispatch({
        type: SELECT_ACTIVE,
        payload: selected
    })
}

export const updateWindow = (width) => (dispatch) => {
    dispatch({
        type: UPDATE_WINDOW,
        payload: width
    })
}