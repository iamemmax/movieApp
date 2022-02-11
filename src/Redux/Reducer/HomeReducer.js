import { FETCH_MOVIE_FAIL, FETCH_MOVIE_RESPONSE, FETCH_MOVIE_SUCCESS, FETCH_TRENDING_MOVIE_FAIL, FETCH_TRENDING_MOVIE_RESPONSE, FETCH_TRENDING_MOVIE_SUCCESS, FILTER_MOVIES_RESPONSE, FILTER_MOVIES_SUCCESS, LOADMORE_MOVIE_FAIL, LOADMORE_MOVIE_RESPONSE, LOADMORE_MOVIE_SUCCESS, SEARCH_QUERY, WATCH_TRAILER_FAIL, WATCH_TRAILER_RESPONSE, WATCH_TRAILER_SUCCESS } from "../constant/constant";

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
        case FILTER_MOVIES_RESPONSE:
        case LOADMORE_MOVIE_RESPONSE:

            return{...state, loading:true}
         case FETCH_MOVIE_SUCCESS:
                return{...state, loading:false, movies:payload}

      
            // return {...state}
        case  FILTER_MOVIES_SUCCESS:
            let movieState = state.movies
           
            if(parseInt(payload) === 0){
                return {...state, loading:false, filterMovies:movieState}
            }else{
               
                const filtereds = movieState.filter( data => data.genre_ids.includes(parseInt(payload)))
              
                return {...state, loading:false, filterMovies:filtereds}
            }
           
            
            
            
        case LOADMORE_MOVIE_SUCCESS:
            return {...state, movies:[...state.movies, ...payload], filterMovies:[...state.movies, ...payload] }
            
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
