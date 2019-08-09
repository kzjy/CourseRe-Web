import { CREATE_MESSAGE, GET_ERRORS } from './types';

// generate new message
export const createMessage = message => {
    return {
        type: CREATE_MESSAGE,
        payload: message
    }
}

// return errors
export const returnErrors = (message, status) => {
    return {
        type: GET_ERRORS,
        payload: {message, status}
    }
}