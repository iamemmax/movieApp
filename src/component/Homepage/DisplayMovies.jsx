import React, {useState} from 'react';
import {Button, Card, CardActionArea, CardContent, CardMedia,  Typography} from "@material-ui/core"
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import {useStyles} from "../Homepage/styles/DisplayMovie"
import  * as AiIcons from "react-icons/ai";

function DisplayMovies({data, setSeletedVideo, handlePlayTrailer}) {

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
            {data.title}
            
          </Typography>
          
         </CardContent> 

         <OutsideClickHandler onOutsideClick={() => setMovieAction(false)}>
         <div className={movieAction ? MovieAction && showMovieAction   : MovieAction  }>
           <div className="play" onClick={()=> handlePlay(data)} >
             <Button variant="contained" color="primary" size="small"  startIcon={<AiIcons.AiOutlinePlayCircle />}><p>Play</p></Button>
            </div>
           <div className="View">
            <Link to={`/${slug}/${data.id}`}> <Button variant="contained" size="small"endIcon={<AiIcons.AiOutlineEyeInvisible/>} ><p>View</p></Button>
             </Link></div>
         </div>
         </OutsideClickHandler>

         
      </CardActionArea> 
      </Card>
           
          
  );
}

export default DisplayMovies;
