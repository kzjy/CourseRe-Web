import { CHANGE_SELECTED } from './types';

export const changeCourse = (course) => (dispatch) => {
    dispatch({
        type: CHANGE_SELECTED,
        payload: course
    })
}