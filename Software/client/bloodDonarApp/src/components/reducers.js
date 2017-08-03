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
    UPDATE_DONAR_REGISTERED_DATA: (state = [], action) => {
        let donars_data = null;
        donars_data = action.payload
        return donars_data;
    },
    DEFAULT_DONAR_DATA: (state = [], action) => {
        let donars_data = null;
        donars_data = action.payload
        return donars_data;
    }
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
    },
    DEFAULT_SEARCH_DATA: (state = [], action) => {
        let search_data = null;
        search_data = action.payload
        return search_data;
    }
},[])

const boolean_popups =handleActions({
    BOOLEAN_POPUPS: (state = [], action) => {
        let boolean_popups = null;
        boolean_popups = action.payload
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

const comment_boolean_check =handleActions({
    COMMENT_BOOLEAN_CHECK : (state = [], action) => {
        let comment_boolean_check= null;
        comment_boolean_check = action.payload
        return comment_boolean_check;
    },
},[])

const total_comments =handleActions({
    TOTAL_COMMENTS: (state = [], action) => {
        let total_comments = null;
        total_comments = [...state, addDonor(action)]
        return total_comments;
    },
},[])

const temp_comments =handleActions({
    TEMP_COMMENT: (state = [], action) => {
        let temp_comments= null;
        temp_comments = action.payload
        return temp_comments;
    },
},[])

const temp_uid =handleActions({
    TEMP_UID: (state = [], action) => {
        let temp_uid = null;
        temp_uid = action.payload
        return temp_uid;
    },
},[])

const recent_donar_status =handleActions({
    RECENT_DONAR: (state = [], action) => {
        let recent_donar_status = null;
        recent_donar_status = action.payload
        return recent_donar_status;
    },
},[])

const post_request_boolean =handleActions({
    POST_REQUEST_BOOLEAN: (state = [], action) => {
        let post_request_boolean = null;
        post_request_boolean = action.payload
        return post_request_boolean;
    },
},[])

const post_request_row_click_record =handleActions({
    POST_REQUEST_ROW_CLICK_RECORD: (state = [], action) => {
        let post_request_row_click_record = null;
        post_request_row_click_record = action.payload
        return post_request_row_click_record;
    },
},[])

const allReducers=combineReducers({
    donars_data:donars_data,
    search_data:search_data,
    boolean_popups:boolean_popups,
    user_request_data:user_request_data,
    popup_check_booleanValue:popup_check_booleanValue,
    total_comments:total_comments,
    comment_boolean_check:comment_boolean_check,
    temp_comments:temp_comments,
    recent_donar_status:recent_donar_status,
    post_request_boolean:post_request_boolean,
    post_request_row_click_record:post_request_row_click_record,
    temp_uid:temp_uid,
    form : formReducer});

export default allReducers
