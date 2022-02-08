import {combineReducers} from "redux"
import {TrendingReducer, MovieReducer,  Searchquery, TrailerReducer} from "./HomeReducer"
import { VideoInfo, similarReducer} from "./SingleReducer"


const allReducer = combineReducers({
    Trending: TrendingReducer,
    Movies:MovieReducer,
    similar:similarReducer,
    query:Searchquery,
    Single:VideoInfo,
  
    Trailer:TrailerReducer,

})


export default allReducer