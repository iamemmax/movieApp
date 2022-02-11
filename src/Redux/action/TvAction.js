import { FETCH_TV_FAIL, FETCH_TV_RESPONSE, FETCH_TV_SUCCESS, LOADMORE_TV_FAIL, LOADMORE_TV_RESPONSE, LOADMORE_TV_SUCCESS } from "../constant/constant";
import axios from "axios"
let accessKey = process.env.REACT_APP_ACCESSKEY_V3;
let Apiurl = "https://api.themoviedb.org/3"


// @DESC fetching tv videos
//@ACCESS PUBLIC
export const GetTvAction = (filter, query) => async (dispatch) =>{
    dispatch({type:FETCH_TV_RESPONSE})
    let url
    try {
        let  mainUrl = `${Apiurl}/tv/${filter}?api_key=${accessKey}&language=en-US&page=1&append_to_response=videos`
        let  queryUrl = `${Apiurl}/search/tv?api_key=${accessKey}&language=en-US&page=1&query=${query}`
        query ? url =queryUrl : url = mainUrl
        const response  = await axios.get(url)
        console.log(response);
        dispatch({type:FETCH_TV_SUCCESS, payload:response.data.results})
    } catch (error) {
        dispatch({type:FETCH_TV_FAIL, error:error.message})
    }
}

// @DESC loading More tv videos
//@ACCESS PUBLIC
export const LoadMoreTv = (filter, page, query,) => async (dispatch) =>{
    console.log("filter", filter);
    console.log("page", page);
    console.log("query", query);
    dispatch({type:LOADMORE_TV_RESPONSE})
    let url
    try {
        let  mainUrl = `${Apiurl}/tv/${filter}?api_key=${accessKey}&language=en-US&page=${page}`
        let  queryUrl = `${Apiurl}/search/tv?api_key=${accessKey}&language=en-US&page=${page}&query=${query}`
        query ? url= queryUrl : url = mainUrl
        const response  = await axios.get(url)
        console.log(response);
        dispatch({type:LOADMORE_TV_SUCCESS, payload:response.data.results})
    } catch (error) {
        dispatch({type:LOADMORE_TV_FAIL, error:error.message})
    }
}