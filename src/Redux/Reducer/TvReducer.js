import {FETCH_TV_FAIL, FETCH_TV_RESPONSE, FETCH_TV_SUCCESS, LOADMORE_TV_FAIL, LOADMORE_TV_RESPONSE, LOADMORE_TV_SUCCESS } from "../constant/constant";

const initialState = {
   tv:[]
}

export const FetchTvReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case FETCH_TV_RESPONSE:
        case LOADMORE_TV_RESPONSE:
            return {...state, loading:true}
        case FETCH_TV_SUCCESS:
            return {...state, loading:false, FilterTv:payload}
    
        case LOADMORE_TV_SUCCESS:
            return {...state, loading:false, FilterTv:[...state.FilterTv, ...payload]}
    
        case FETCH_TV_FAIL:
        case LOADMORE_TV_FAIL:
            return {...state, loading:false, error:payload}
    
        default:
          return state
    }
}