import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {VideoDetail, movieCast, SimilarMovies} from "../Redux/action/SingleDetailAction"
import {useParams} from "react-router-dom"
import DisplayDetails from '../component/videoDetails/DisplayDetails';
import DisplayCast from '../component/videoDetails/DisplayCast';
import DisplayCrew from '../component/videoDetails/DisplayCrew';
import { Grid, Typography } from '@material-ui/core';
import DisplaySimilarMovies from '../component/videoDetails/DisplaySimilarMovies';
import {useStyles} from "./styles//singleStyle"

function Singlepage() {
const {id} = useParams()

const dispatch = useDispatch()
const Single = useSelector(state => state.Single)
let {loading, single, similarMovies} = Single
useEffect(() => {
    dispatch(VideoDetail(id))
   
      dispatch(movieCast(id))
      dispatch(movieCast(id))
      dispatch(SimilarMovies(id))
   
}, [dispatch, id]);

const classes = useStyles()
  return (
  <div>
      
      {loading && <h1>Loading</h1>}
     {single && <DisplayDetails  single={single}/>}

    <>
    <DisplayCast />
      <DisplayCrew />

      {/* display similar product */}
     
     <div className={classes.divContainer}>
     <Typography variant="h5" component="h2" className={classes.heading}>Recommended movies</Typography>
     <Grid container>
      {similarMovies && similarMovies && similarMovies.map((data, index) => (
        <Grid item key={index} xs={12} sm={6} md={3} lg={2}>
          <DisplaySimilarMovies data={data} />
        </Grid>
      ))}
        
      </Grid>
      
    </div>
     </>

  </div>
  
  );
}

export default Singlepage;
