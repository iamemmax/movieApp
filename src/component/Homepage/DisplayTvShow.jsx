import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia,  Typography} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
 title:{
   fontSize:14
 },
 card:{
    margin:7
  }, 
 
})
function DisplayTvShow({data, setSeletedImg}) {

  const classes = useStyles()
  return( 
  

      
    <Card className={classes.card}  elevation={0} onClick={()=>setSeletedImg(data)}> 

      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt= {data.name}
        />
        <CardContent>
          <Typography   xs={5} variant="h6" component="h2" noWrap className={classes.title}>
              {data.name || data.title}
          </Typography>
          
         </CardContent> 
      </CardActionArea> 
    </Card>
      
           
          
  );
}

export default DisplayTvShow;
