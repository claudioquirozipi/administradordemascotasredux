import {combineReducers} from 'redux';
import citasReducer from './citasReducer';
import validarReducer from './validarReducer';


export default combineReducers({
    citas: citasReducer,
    error: validarReducer
})