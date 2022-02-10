import React, {useEffect} from 'react'
// import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/styles'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Button, Grid } from '@material-ui/core';

const useStyles  = makeStyles((theme) =>({

    
    filterBtn:{
      //  display:"flex",
      //  justifyContent:"center",
      //   width:'100%',
      //   border:"2px solid red",
      //   textAlign:"center",
      //   margin:" 0px 10px",
        
      [theme.breakpoints.down('sm')]:{
       display:"none",
    },
        
        '&  > * button':{
            margin:"10px",
           
        borderRadius:"30px",
        

        [theme.breakpoints.down('sm')]:{
            fontSize:12,
            margin:10
        },

    },
        '& .active':{
            backgroundColor:theme.palette.secondary.main,
            color:"#fff",
            border:"none",
        },
        
    },
}))

function FilterMovies({setFiltered, genres, setGenres, movies}) {
    useEffect(() =>{

        if(genres === 0){
            setFiltered(movies)
            return
        }
        const FilteredMovies = movies.filter((data) => data.genre_ids.includes(genres))
        
            setFiltered(FilteredMovies)
        
    }, [genres,  setFiltered , movies])


    const {filterBtn} = useStyles()



  return (
    <div className={filterBtn}>

       
        {/* <Slider {...settings}> */}
           <Grid container  >
             <Grid item xs={12} md={12} >

                
                <Button  variant="outlined"   className={genres === 0 ? "active" : "" } onClick={()=>setGenres(0)} >All</Button>
                <Button   variant="outlined"  className={genres === 28 ? "active" : ""} onClick={()=>setGenres(28)}  >Action</Button>
                <Button  variant="outlined"  className={genres ===35 ? "active" : ""} onClick={()=>setGenres(35)}  >Comedy</Button>
                <Button  variant="outlined"  className={genres === 80 ? "active" : ""} onClick={()=>setGenres(80)}  >Crime</Button>
                <Button  variant="outlined"  className={genres === 10752 ? "active" : ""} onClick={()=>setGenres(10752)}  >War</Button>
                <Button  variant="outlined"  className={genres === 10749 ? "active" : ""} onClick={()=>setGenres(10749)}  >Romance</Button>
                <Button  variant="outlined"  className={genres === 18 ? "active" : ""} onClick={()=>setGenres(18)}  >Drama</Button>
            {/* </Slider > */}
            
           </Grid>
           </Grid>
           
      
    </div>
  )
}

export default FilterMovies