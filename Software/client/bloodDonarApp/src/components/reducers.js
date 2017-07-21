/**
 * Created by semanticbits on 21/7/17.
 */

import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {reducer as formReducer} from 'redux-form'

const addDonor = (action) =>{
    return {
        data :action.payload
    }
}

const donars_data =handleActions({
    NEW_DONAR_REGISTERED_DATA: (state = [], action) => {
        let donars_data = null;
        donars_data = [...state, addDonor(action)]
        return donars_data;
    }
},[])
const allReducers=combineReducers({donars_data:donars_data,
    form : formReducer});
export default allReducers
