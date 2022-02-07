import {combineReducers} from "redux"
import {TrendingReducer, MovieReducer,  Searchquery, TrailerReducer} from "./HomeReducer"
import { VideoInfo} from "./SingleReducer"


const allReducer = combineReducers({
    Trending: TrendingReducer,
    Movies:MovieReducer,
    //Tv:TvReducer,
    query:Searchquery,
    Single:VideoInfo,
  
    Trailer:TrailerReducer,

})


export default allReducer