import { GET_REMINDERS, DELETE_REMINDERS, ADD_REMINDERS, DELETE_COURSES, ADD_COURSES, GET_COURSES, ADD_GRADES, DELETE_GRADES, GET_GRADES } from '../actions/types.js';

const initialState = {
    reminders: [],
    courses: [],
    grades: [],
    course_list: []
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
        case GET_COURSES:
            return {
                ...state, 
                courses: action.payload
            }
        case DELETE_COURSES:
            return {
                ...state,
                courses: state.courses.filter(course => course.id !==
                    action.payload)
            }
        case ADD_COURSES:
            return {
                ...state,
                courses: [...state.courses, action.payload]
            }
        case ADD_GRADES:
            return {
                ...state, 
                grades: [...state.grades, action.payload]
            }
        case GET_GRADES:
            return {
                ...state, 
                grades: action.payload
            }
        case DELETE_GRADES:
            return {
                ...state,
                grades: state.grades.filter(grade => grade.id !== action.payload)
            }

        default:
            return state;
    }
}