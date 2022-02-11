import React from 'react'
// import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/styles'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {  Grid } from '@material-ui/core';

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
           padding:"10px 25px",
        borderRadius:"30px",
        outline:"none",
        backgroundColor:"transparent",
            border:"1px solid #eee"
,
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

function FilterMovies({handleFilter, genres}) {
   


       


    const {filterBtn} = useStyles()


  return (
    <div className={filterBtn}>

       

        
           <Grid container  >
             <Grid item xs={12} md={12} >


                {/* <Button type="button"  variant="outlined"  value="0"    onClick={handleFilter} >All</Button> */}

                <button type="button"  variant="outlined"  value="0"    className={genres === 0 ? "active" : ""}  onClick={handleFilter} >All</button>
                <button   variant="outlined" value="28"   className={genres === 28 ? "active" : ""} onClick={handleFilter}  >Action</button>
                <button  variant="outlined"  value="35"   className={genres === 35 ? "active" : ""} onClick={handleFilter}  >Comedy</button>
                <button  variant="outlined"  value="80"   className={genres === 80 ? "active" : ""} onClick={handleFilter}  >Crime</button>
                <button  variant="outlined"   value="10752"   className={genres === 10752 ? "active" : ""} onClick={handleFilter}  >War</button>
                <button  variant="outlined"   value="10749"    className={genres === 10749 ? "active" : ""} onClick={handleFilter}  >Romance</button>
                <button  variant="outlined"  value="18"   className={genres === 18 ? "active" : ""} onClick={handleFilter}  >Drama</button>
            {/* </Slider > */}
            
           </Grid>
           </Grid>
           
      
    </div>
  )
}

export default FilterMovies