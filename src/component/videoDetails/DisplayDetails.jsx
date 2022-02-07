import React from 'react';
import { Grid, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core';
import {useStyles} from "../../Pages/styles/singleStyle"
import ReactStars from "react-rating-stars-component";
import  * as AiIcons from "react-icons/ai";
import moment from "moment"
import {format} from "https://cdn.skypack.dev/d3-format@3";


function DisplayDetails({single}) {
    const classes = useStyles()
    const f = format(".2s");



  return (
  <div>
     <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6}>
            <div className={classes.videoImg} style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${single.backdrop_path}')`}}>

            </div>
        </Grid>
        <Grid item sm={12} md={6}>
            <div>
                <Typography variant="h5" component="h2" className={classes.title}>{single.title || single.name}</Typography>
               
               <Grid container className={classes.votes} justifyContent="space-between">

                    <Grid  item className={classes.rating} xs={5}>
                    <Typography variant="body1" className={classes.ratingIcon}> Ratings:
                    </Typography>
                    <ReactStars   count={5} size={18} isHalf={true} value={single?.vote_average/2} emptyIcon={<i className="far fa-star"></i>} halfIcon={<i className="fa fa-star-half-alt"></i>} fullIcon={<i className="fa fa-star"></i>} activeColor="#ffd700" edit={false} />
                    </Grid>  

                    <Grid  item className={classes.rating} xs={5}  >
                    <Typography variant="body1" className={classes.ratingIcon} align="right"> <AiIcons.AiOutlineLike />: {f(single.vote_count)}
                    </Typography>
                    
                    </Grid>  

               </Grid>

                <Typography variant="body1" className={classes.overview}>Release Date: {moment(single.release_date).format('LLL') }</Typography>
                
                <Typography variant="body1" className={classes.overview}>{single.overview}</Typography>
            </div>   
        <div className={classes.company}>
            <Typography variant="h6" component="h2"  className={classes.companyTitle} gutterBottom>Production Companies</Typography>
            
            
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
      
        <TableHead>
          <TableRow>
            <TableCell>Logo</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="right">Country</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {single.production_companies && single.production_companies.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <img src={`https://image.tmdb.org/t/p/w200${row.logo_path}`} style={{width:"50px"}} alt={row.name} />
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="right">{row.origin_country}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
            </Grid>
     </Grid>

     
  </div>);
}

export default DisplayDetails;
