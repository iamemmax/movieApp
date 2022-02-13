import React, { useState } from 'react';
import {Button, Card, CardActionArea, CardContent, CardMedia,  Typography} from "@material-ui/core"
import OutsideClickHandler from 'react-outside-click-handler';
import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import  * as AiIcons from "react-icons/ai";
import {useStyles} from "../Tv/styles/tvstyles"
import {TvTrailer} from "../../Redux/action/TvAction"
import { useDispatch, useSelector } from 'react-redux';
import PreviewVideo  from "../../component/PreviewVideo"



function DisplayTvShow({data}) {
  const dispatch = useDispatch()
  const slug = slugify(data.title ||data.name )
  const [play, setPlay] = useState(false);
  const [movieAction, setMovieAction] = useState(false);
  const handlePlay = (data) =>{
    const id = data.id
    
    dispatch(TvTrailer(id))

    setPlay(true)
  }
  const {title,  card, tvActionBtnsBox, TvWrappaer} = useStyles()
const Trailer  = useSelector(state => state.Trailer.trailer)

  return( 

<div>

    {play && ( <div className={TvWrappaer}><PreviewVideo videoId={Trailer?.key}  handleCloseVideo={()=>setPlay(false)}/></div>)}
      
    <Card className={card}  elevation={0}  onClick={()=>setMovieAction(true)}> 

      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt= {data.name}
        />
        <CardContent>
          <Typography   xs={5} variant="h6" component="h2" noWrap className={title}>
              {data.name || data.title}
          </Typography>
          
         </CardContent> 
      </CardActionArea> 
      

      <div className={tvActionBtnsBox}>
     <OutsideClickHandler onOutsideClick={() => setMovieAction(false)}>
         <div className={movieAction ?  "middle-container showAction": "middle-container"} >
           <div className="play" onClick={()=> handlePlay(data)} >
             <Button variant="contained" color="primary" size="small"  startIcon={<AiIcons.AiOutlinePlayCircle />}><span className="action" >Play</span></Button>
            </div>
           <div className="View">
            <Link to={`/tv/${slug}/${data.id}`}> <Button variant="contained" size="small"endIcon={<AiIcons.AiOutlineEyeInvisible/>}> <span className="action">View</span> </Button>
             </Link></div>
         </div>
         </OutsideClickHandler> 
       </div>
 
    </Card>
    </div>   
           
          
  );
}

export default DisplayTvShow;
