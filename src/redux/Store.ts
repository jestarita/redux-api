import {combineReducers} from 'redux';
import {CountriesReducer} from './reducer';

const rootReducers  = combineReducers({
    Country_list :CountriesReducer
})

export default rootReducers