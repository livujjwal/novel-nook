import { FETCHING, FETCH_ERROR, FETCH_SUCCESS } from "../action/actionTypes";

const initialState = {
    loading : false,
    data : [],
    error : null
}

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING: return {...state , loading: true , data : [] , error : null}
        case FETCH_SUCCESS: return {...state , loading: false , data : action.payload , error : null}
        case FETCH_ERROR: return {...state , loading: false , data : [] , error : action.payload}
        default: return state
    }
}

export default fetchReducer