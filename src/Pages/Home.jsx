import React, {useEffect, useState} from 'react';
import {Button, Grid, Typography } from '@material-ui/core';
import {TrendingFetch, MovieFetch,  TrailerAction, LoadMoreMovies} from "../Redux/action/HomepageAction"
import {useDispatch, useSelector} from "react-redux"
import DisplayTrending from '../component/Homepage/DisplayTrending';
import DisplayMovies from '../component/Homepage/DisplayMovies';
import {useStyles} from "./styles/homeStyles"
import {settings} from "../component/SliderSetting"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import YouTube from 'react-youtube';
import InfiniteScroll from 'react-infinite-scroll-component';



function Home() {
  const dispatch = useDispatch()

  const trend = useSelector(state => state.Trending)
  const Movies = useSelector(state => state.Movies)
  const myquery = useSelector(state => state.query)
  const myTrailer = useSelector(state => state.Trailer)
    let {query} = myquery
    let {trailer} = myTrailer

    let {trending} = trend
    let { loading, movies} = Movies

    let trailers = movies[0]
    console.log(trailers);
    
    const [selectedVideo, setSeletedVideo] = useState({})
    const [play, setPlay] = useState(false)
    const [page, setPage] = useState(2)



    useEffect(() => {
      dispatch(TrendingFetch())  
      dispatch(MovieFetch(query))  
        setSeletedVideo(trailers)
    }, [query]);
    
    
    



  const classes = useStyles()
  
  let {text, p, overView, title, preview, grids, banner, close} = classes

  
     

    // console.log(selectedVideo);
  const handlePlayTrailer = (selectedVideo) =>{
    let id = selectedVideo.id
    dispatch(TrailerAction(id))
    setPlay(true)
  }

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
     
    },
  };
  

  const fetchMoreData =() =>{
    setPage(page+1)
    dispatch(LoadMoreMovies(query, page))
  }
  return (
  <div>
  
 { selectedVideo && <div  className={banner} style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${selectedVideo.backdrop_path}")`}}>
    { selectedVideo && <div className={preview}>
    
      { play ? <YouTube videoId={trailer.key}   control={false}  containerClassName={preview} opts={opts}  /> : null}

     </div>}
      {!play && <div className={text}>
        <Button variant="contained" color="secondary" size="large" onClick={() =>handlePlayTrailer(selectedVideo)}>Play Trailer</Button>
      <Typography variant="h2" component="h1" className={title}>{selectedVideo.title}</Typography>
      <div className={overView}>
      <Typography variant="h6" component="span" className={p}>{selectedVideo.overview}</Typography>

      </div>
        </div>} 
       { play && <Button variant="contained" color="primary" size="large" className={close} onClick={() =>setPlay(false)}>Close</Button>}


    </div> }

    <div>

    <Typography variant='h6' component="h2" gutterBottom>Trending</Typography>
          
      <Slider {...settings}>

            {trending && trending.map(data=> <DisplayTrending handlePlayTrailer={handlePlayTrailer} setSeletedVideo={setSeletedVideo} data={data}  key={data.id} className={grids} />
           
           )}
           </Slider>

           </div>


  <div className="movie">
    <Typography variant='h6' component="h2" gutterBottom>Popular Movies</Typography>

        <InfiniteScroll  dataLength={movies.length} next={fetchMoreData} hasMore={true} loader={Movies.loading && <h4>Loading...</h4>}>

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
