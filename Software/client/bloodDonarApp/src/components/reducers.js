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
        let search_dataa = null;
        search_dataa =action.payload;
        return search_dataa ;
    }
},[])
const allReducers=combineReducers({donars_data:donars_data,search_data:search_data,
    form : formReducer});
export default allReducers
