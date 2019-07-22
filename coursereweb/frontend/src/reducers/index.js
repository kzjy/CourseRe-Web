import {combineReducers} from 'redux';
import reminderReducer from './reminderReducer'
import errorsReducer from './errorsReducer'
import messagesReducer from './messagesReducer'
import authReducer from './authReducer'
import navReducer from './navReducer'

export default combineReducers({
    reminderReducer,
    errorsReducer,
    messagesReducer,
    authReducer,
    navReducer
});