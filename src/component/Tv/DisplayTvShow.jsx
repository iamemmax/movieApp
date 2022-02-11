import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia,  Typography} from "@material-ui/core"
// import OutsideClickHandler from 'react-outside-click-handler';
// import slugify from 'react-slugify';
// import { Link } from 'react-router-dom';
// import  * as AiIcons from "react-icons/ai";
import {useStyles} from "../Homepage/styles/DisplayMovie"




function DisplayTvShow({data}) {

  const {title,  card} = useStyles()
  // const slug = slugify(data.title ||data.name )
  // const [play, setplay] = useState(false);
  // const handlePlay = () =>{

  // }
  return( 
  

      
    <Card className={card}  elevation={0}> 

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
      

      {/* <div className={movieAction ? MovieAction && showMovieAction   : MovieAction  }> */}
      {/* <OutsideClickHandler onOutsideClick={() => setMovieAction(false)}>
         <div className={movieAction ? MovieAction && showMovieAction   : MovieAction  }>
           <div className="play" onClick={()=> handlePlay(data)} >
             <Button variant="contained" color="primary" size="small"  startIcon={<AiIcons.AiOutlinePlayCircle />}><span className="action" >Play</span></Button>
            </div>
           <div className="View">
            <Link to={`/${slug}/${data.id}`}> <Button variant="contained" size="small"endIcon={<AiIcons.AiOutlineEyeInvisible/>}> <span className="action">View</span> </Button>
             </Link></div>
         </div>
         </OutsideClickHandler> */}
       {/* </div> */}
 
    </Card>
      
           
          
  );
}

export default DisplayTvShow;
