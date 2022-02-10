import React, { useState } from 'react';
import {Button, Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core"
import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/styles';
import {useStyles} from "../Homepage/styles/DisplayMovie"
import OutsideClickHandler from 'react-outside-click-handler';
import  * as AiIcons from "react-icons/ai";

import slugify from 'react-slugify';



function DisplayTrending({data, setSeletedVideo, handlePlayTrailer}) {
  
  const classes = useStyles()
  
  const [movieAction, setMovieAction] = useState(false)
  
  const handleShowAction = (e) =>{
    setMovieAction(true)
  }
  const handlePlay = (data) =>{
    setSeletedVideo(data)
    handlePlayTrailer(data)
  }
  let {title, MovieAction, showMovieAction} = classes
  const slug = slugify(data.title ||data.name )

  
  return( 
  

      
      
    <Card className={classes.card}  onClick={handleShowAction} elevation={0}> 
              
    <CardActionArea>
      <CardMedia
        component="img"
        height="250"
        image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt= {data.title}
      />
      <CardContent>
        <Typography   xs={5} variant="h6" component="h2" noWrap className={title}>
          {data.title || data.name}
          
        </Typography>
        
       </CardContent> 

       <div className={movieAction ? MovieAction && showMovieAction   : MovieAction  }>
       <OutsideClickHandler onOutsideClick={() => setMovieAction(false)}>
         <div className="play" onClick={()=> handlePlay(data)} >
           <Button variant="contained" color="primary" size="small" startIcon={<AiIcons.AiOutlinePlayCircle />}>Play</Button>
          </div>
         <div className="View">
          <Link to={`/${slug}/${data.id}`}> <Button variant="contained" size="small"endIcon={<AiIcons.AiOutlineEyeInvisible/>} >View</Button>
           </Link></div>
       </OutsideClickHandler>
       </div>
    </CardActionArea> 
    </Card>
         
        
          
  );
}

export default DisplayTrending;
