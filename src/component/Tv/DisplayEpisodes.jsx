import React, {useEffect} from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import {TvEpisodes} from "../../Redux/action/TvAction"
import Loading from '../Loading'
import {useStyles} from "../Tv/styles/tvstyles"



function DisplayEpisodes() {


 const dispatch =  useDispatch()

 const {id, number} = useParams()

 useEffect(() => {
  dispatch(TvEpisodes(id, number))
 }, [dispatch, id, number])

const season =  useSelector((state) => state.TvInfo)
let {loading, episode} = season
console.log(loading, episode);

const {episode1} = useStyles()
  return (
    <div>
  {loading && <Loading/>}
{
      episode &&(
        

        
        <div >

              <Grid container  spacing={2} className={episode1}>

          {episode.episodes.map(data =>(
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Card className="season" elevation={0} key={data.id}> 

            
<CardActionArea>
  <CardMedia
    component="img"
    height="250"
    image={`https://image.tmdb.org/t/p/w500/${data.still_path}`}
    alt= {data.name}
  />
  <CardContent>
    <Typography   xs={5} variant="h6" component="h2" noWrap className="card-title">
      {data.name}
      
    </Typography>
    
   </CardContent> 

   
   
              {/* <div className="playIcon"> <Link to={`/tv/${id}/season/${data.season_number}`}><AiIcons.AiOutlinePlayCircle /></Link></div> */}
</CardActionArea> 
     </Card>
            </Grid>
          ))}
        </Grid>
    
                </div>
        )
}
    
    </div>
  )
}

export default DisplayEpisodes