import { FETCH_MOVIE_FAIL, FETCH_MOVIE_RESPONSE, FETCH_MOVIE_SUCCESS, FETCH_TRENDING_MOVIE_FAIL, FETCH_TRENDING_MOVIE_RESPONSE, FETCH_TRENDING_MOVIE_SUCCESS,  FILTER_MOVIES_FAIL, FILTER_MOVIES_RESPONSE, FILTER_MOVIES_SUCCESS, LOADMORE_MOVIE_FAIL, LOADMORE_MOVIE_RESPONSE, LOADMORE_MOVIE_SUCCESS, SEARCH_QUERY, WATCH_TRAILER_FAIL, WATCH_TRAILER_RESPONSE, WATCH_TRAILER_SUCCESS } from "../constant/constant"

import axios from "axios"

let accessKey = process.env.REACT_APP_ACCESSKEY_V3;
let Apiurl = "https://api.themoviedb.org/3"
// fetch Trending
export const TrendingFetch = () => async (dispatch)=>{
    dispatch({type:FETCH_TRENDING_MOVIE_RESPONSE})

    try {
        const response = await axios.get(`${Apiurl}/trending/all/day?api_key=${accessKey}&page=1`)
        dispatch({type:FETCH_TRENDING_MOVIE_SUCCESS, payload:response.data.results})
    } catch (error) {
        dispatch({type:FETCH_TRENDING_MOVIE_FAIL, payload:error.message})
    }
}

// fetch movies
export const MovieFetch = (query, genres) => async (dispatch)=>{
    let searchUrl = `${Apiurl}/search/movie/?api_key=${accessKey}&page=1&query=${query}`
    let mainUrl =  `${Apiurl}/discover/movie/?api_key=${accessKey}&page=1`
    let url
    console.log(genres);
    dispatch({type:FETCH_MOVIE_RESPONSE})
    dispatch({type:FILTER_MOVIES_RESPONSE})
    try {
        query ? url = searchUrl : url = mainUrl
        const response = await axios.get(url)
        dispatch({type:FETCH_MOVIE_SUCCESS, payload:response.data.results})
        dispatch({type:FILTER_MOVIES_SUCCESS, payload:genres})

    } catch (error) {
        dispatch({type:FETCH_MOVIE_FAIL, payload:error.message})
        dispatch({type:FILTER_MOVIES_FAIL, payload:error.message})
    }
}
export const LoadMoreMovies = (query, page) => async (dispatch)=>{
    let searchUrl = `${Apiurl}/search/movie/?api_key=${accessKey}&page=${page}&query=${query}`
    let mainUrl =  `${Apiurl}/discover/movie/?api_key=${accessKey}&page=${page}`
    let url
    dispatch({type:LOADMORE_MOVIE_RESPONSE})
    try {
        query ? url = searchUrl : url = mainUrl
        const response = await axios.get(url)
        dispatch({type:LOADMORE_MOVIE_SUCCESS, payload:response.data.results})
    } catch (error) {
        dispatch({type:LOADMORE_MOVIE_FAIL, payload:error.message})
    }
}




export const TrailerAction = (id) => async (dispatch) =>{
    let url = `${Apiurl}/movie/${id}?api_key=${accessKey}&append_to_response=videos`
    
    dispatch({type:WATCH_TRAILER_RESPONSE})
    try {
      
        const response = await axios.get(url)
        let trailerVideo = response.data.videos.results.find(data => data.name === "Official Trailer" || data.type === "Trailer")
        dispatch({type:WATCH_TRAILER_SUCCESS, payload:trailerVideo})
        
    } catch (error) {
        dispatch({type:WATCH_TRAILER_FAIL, payload:error.message})
        
    }
}

export const SearchQuery = (query) => async (dispatch) =>{
    dispatch({type:SEARCH_QUERY, payload:query})
}


