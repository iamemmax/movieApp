import { FETCH_MOVIE_FAIL, FETCH_MOVIE_RESPONSE, FETCH_MOVIE_SUCCESS, FETCH_TRENDING_MOVIE_FAIL, FETCH_TRENDING_MOVIE_RESPONSE, FETCH_TRENDING_MOVIE_SUCCESS, LOADMORE_MOVIE_FAIL, LOADMORE_MOVIE_RESPONSE, LOADMORE_MOVIE_SUCCESS, SEARCH_QUERY, WATCH_TRAILER_FAIL, WATCH_TRAILER_RESPONSE, WATCH_TRAILER_SUCCESS } from "../constant/constant";

// let initialQuery = ""
export const Searchquery = (state ={}, {type, payload}) =>{
    switch (type) {
        case SEARCH_QUERY:
           return {...state, query:payload}
    
        default:
            return state;
    }
}



const initialState = {
    trending:[]

}
export const TrendingReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case FETCH_TRENDING_MOVIE_RESPONSE:
            return{...state, loading:true}
            
        
        case FETCH_TRENDING_MOVIE_SUCCESS:
            return {...state, trending:[...state.trending, ...payload]}
        case FETCH_TRENDING_MOVIE_FAIL:
            return{...state, loading:false, error:payload}
            
    
        default:
            return state;
    }
}   

const initial = {
    movies:[],
    
}
export const MovieReducer = (state = initial, {type, payload}) =>{
    switch (type) {
        case FETCH_MOVIE_RESPONSE:
        case LOADMORE_MOVIE_RESPONSE:

            return{...state, loading:true}
         case FETCH_MOVIE_SUCCESS:
                return{...state, loading:false, movies:payload}
            
        case LOADMORE_MOVIE_SUCCESS:
            return {...state, movies:[...state.movies, ...payload]}
            
        case FETCH_MOVIE_FAIL:
        case LOADMORE_MOVIE_FAIL:
            return{...state, loading:false, error:payload}
            
    
        default:
            return state;
    }
}   




const trailerState = {
    trailer:{}
}
export const TrailerReducer = (state = trailerState, {type, payload}) =>{
    switch (type) {
        case WATCH_TRAILER_RESPONSE:
            return{...state, loading:true}
            
        case WATCH_TRAILER_SUCCESS:
            return{...state, loading:false, trailer:payload}
            
        case WATCH_TRAILER_FAIL:
            return{...state, loading:false, error:payload}
            
    
        default:
            return state;
    }
}   
