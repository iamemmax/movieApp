import React, {useEffect, useState} from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import {TrendingFetch, MovieFetch,  TrailerAction, LoadMoreMovies} from "../Redux/action/HomepageAction"
import {useDispatch, useSelector} from "react-redux"
import DisplayTrending from '../component/Homepage/DisplayTrending';
import DisplayMovies from '../component/Homepage/DisplayMovies';
import {useStyles} from "./styles/homeStyles"
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../component/Loading';
import PreviewVideo from '../component/PreviewVideo';
import {settings} from "../component/SliderSetting"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FilterMovies from '../component/videoDetails/FilterMovies';



function Home() {
  const dispatch = useDispatch()
  const query = useSelector(state => state.query.query)
 



  const Movies = useSelector(state => state.Movies)
  let { movies} = Movies
  useEffect(() => {
    dispatch(TrendingFetch())  
    dispatch(MovieFetch(query))  
      setFiltered(movies)
  }, [query, dispatch, movies]);
  
  
  


  const trend = useSelector(state => state.Trending)
  const myTrailer = useSelector(state => state.Trailer)
    let {trailer} = myTrailer

    let {trending} = trend

    // let trailers = movies[0]
    
    const [selectedVideo, setSeletedVideo] = useState({})
    const [play, setPlay] = useState(false)
    const [page, setPage] = useState(2)
    const [filtered, setFiltered] = useState([])
    const [genres, setGenres] = useState(0)
    

    

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
            {trending && trending.map(data=> <DisplayTrending  handlePlayTrailer={handlePlayTrailer} movies={movies} setSeletedVideo={setSeletedVideo} data={data}  key={data.id} className={grids} />
           
           )}
           </Slider>
           </div>


  <div className="movie">
    <Typography variant='h6' component="h2" gutterBottom>Popular Movies</Typography>

    <div className="filterMovie">
  
      <FilterMovies  filtered={filtered} setFiltered={setFiltered} genres={genres} movies={movies} setGenres={setGenres}/>
    
    </div>

<Box>
        <InfiniteScroll  scrollThreshold={0.6} dataLength={filtered.length} next={fetchMoreData} hasMore={true} loader={Movies.loading && <Loading /> }>
 
          <Grid container>
            {filtered && filtered.map(data=> (
              <Grid item xs={6} sm={6} md={4} lg={2}  key={data.id}>
                 <DisplayMovies handlePlayTrailer={handlePlayTrailer} setSeletedVideo={setSeletedVideo}  data={data}  className={grids}/>

              </Grid>
            ) )}


              </Grid>
            </InfiniteScroll>
</Box>


  </div>

 
     
  </div>
  );
}

export default Home;
