/**
 * Created by semanticbits on 21/7/17.
 */

import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {reducer as formReducer} from 'redux-form'

const addDonor = (action) =>{
    return action.payload

}

const donars_data =handleActions({
    NEW_DONAR_REGISTERED_DATA: (state = [], action) => {
        let donars_data = null;
        donars_data = [...state, addDonor(action)]
        return donars_data;
    },

},[])
const  search_data=handleActions({
    SEARCH_DATA: (state = [], action) => {
        let search_data = null;
        search_data  = [...state, addDonor(action)]
        return search_data ;
    },
    SEARCH_DATAA: (state = [], action) => {
        let search_data = null;
        search_data =action.payload;
        return search_data ;
    }
},[])
const boolean_popups =handleActions({
    BOOLEAN_POPUPS: (state = [], action) => {
        let boolean_popups = null;
        boolean_popups = [state, addDonor(action)]
        return boolean_popups;
    }
},[])

const user_request_data =handleActions({
    USER_REQUEST_DATA: (state = [], action) => {
        let user_request_data= null;
        user_request_data = [...state, addDonor(action)]
        return user_request_data;
    },

},[])

const popup_check_booleanValue =handleActions({
    POPUP_CHECK_BOOLEANVALUE: (state = [], action) => {
        let popup_check_booleanValue= null;
        popup_check_booleanValue = action.payload
        return popup_check_booleanValue;
    },
},[])

const allReducers=combineReducers({
    donars_data:donars_data,
    search_data:search_data,
    boolean_popups:boolean_popups,
    user_request_data:user_request_data,
    popup_check_booleanValue:popup_check_booleanValue,
    form : formReducer});
export default allReducers
