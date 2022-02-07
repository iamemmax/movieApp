import { SIMILAR_FAIL, SIMILAR_RESPONSE, SIMILAR_SUCCESS, SINGLE_CAST_FAIL, SINGLE_CAST_RESPONSE, SINGLE_CAST_SUCCESS, SINGLE_FAIL, SINGLE_RESPONSE, SINGLE_SUCCESS } from "../constant/constant"

// video details 
let iniState ={
  single:{},
  loading:true
}

export const VideoInfo = (state=iniState, {type, payload}) =>{
    switch (type) {
        case SINGLE_RESPONSE:
        case SINGLE_CAST_RESPONSE:
        case SIMILAR_RESPONSE:
            return{...state, loading:true}
            
        case SINGLE_SUCCESS:
            return {...state, loading:false,  single: payload}
            
        case SINGLE_CAST_SUCCESS:
            return {...state, loading:false, casts:payload}

        case SIMILAR_SUCCESS:
            return {...state, loading:false, similarMovies:payload}

        case SINGLE_FAIL:
        case SINGLE_CAST_FAIL:
        case SIMILAR_FAIL:
               return {...state, loading:false, error:payload}
    
        default:
            return state;
    }

}