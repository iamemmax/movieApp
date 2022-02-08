import React, {useEffect, useState} from 'react';
import { Grid, Typography } from '@material-ui/core';
import {TrendingFetch, MovieFetch,  TrailerAction, LoadMoreMovies} from "../Redux/action/HomepageAction"
import {useDispatch, useSelector} from "react-redux"
import DisplayTrending from '../component/Homepage/DisplayTrending';
import DisplayMovies from '../component/Homepage/DisplayMovies';
import {useStyles} from "./styles/homeStyles"
import {settings} from "../component/SliderSetting"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../component/Loading';
import PreviewVideo from '../component/PreviewVideo';



function Home() {
  const dispatch = useDispatch()

  const trend = useSelector(state => state.Trending)
  const Movies = useSelector(state => state.Movies)
  const myquery = useSelector(state => state.query)
  const myTrailer = useSelector(state => state.Trailer)
    let {query} = myquery
    let {trailer} = myTrailer

    let {trending} = trend
    let { movies} = Movies

    let trailers = movies[0]
    console.log(trailers);
    
    const [selectedVideo, setSeletedVideo] = useState({})
    const [play, setPlay] = useState(false)
    const [page, setPage] = useState(2)
    
    

    useEffect(() => {
      dispatch(TrendingFetch())  
      dispatch(MovieFetch(query))  
        setSeletedVideo(trailers)
    }, [query, dispatch, trailers]);
    
    
    



  const {grids} = useStyles()
  


    console.log(selectedVideo);
  const handlePlayTrailer = (selectedVideo) =>{
    let id = selectedVideo.id
    dispatch(TrailerAction(id))
    setPlay(true)
  }

  

 
  const fetchMoreData =() =>{
    setPage(page+1)
    dispatch(LoadMoreMovies(query, page))
  }
  
  return (
  <div>
  

{/* <PreviewVideo  /> */}

{play && <PreviewVideo videoId={trailer.key}  handleCloseVideo={()=>setPlay(false)}/>}

    <div>

    <Typography variant='h6' component="h2" gutterBottom>Trending</Typography>
          
            {trending.loading && <Loading />
            
      }
      <Slider {...settings}>
            {trending && trending.map(data=> <DisplayTrending  handlePlayTrailer={handlePlayTrailer} setSeletedVideo={setSeletedVideo} data={data}  key={data.id} className={grids} />
           
           )}
           </Slider>
           </div>


  <div className="movie">
    <Typography variant='h6' component="h2" gutterBottom>Popular Movies</Typography>

        <InfiniteScroll  dataLength={movies.length} next={fetchMoreData} hasMore={true} loader={Movies.loading && <Loading /> }>

          <Grid container>
            {movies && movies.map(data=> (
              <Grid item xs={12} sm={6} md={4} lg={2}  key={data.id}>
                 <DisplayMovies handlePlayTrailer={handlePlayTrailer} setSeletedVideo={setSeletedVideo}  data={data}  className={grids}/>

              </Grid>
            ) )}


              </Grid>
            </InfiniteScroll>


  </div>

 
     
  </div>
  );
}

export default Home;
