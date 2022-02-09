import React, {useEffect} from 'react'
// import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/styles'
// import {settings} from "../../component/SliderSetting"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles/sliderArrow.css"

const useStyles  = makeStyles((theme) =>({

    
    filterBtn:{
    //    display:"flex",
    //    justifyContent:"center",
        // width:'100%',
        // border:"2px solid red",
        // textAlign:"center",
        // margin:" 0px 10px",
        
        
        
        '&  > button':{
            margin:theme.spacing(3),
            
            // padding:" 5px 20px",
        borderRadius:"20px",
        // width:30,

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
        '& filterslide':{
            border:"2px solid red"
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



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrow:true,
        slidesToShow: 7,
        slidesToScroll: 1,
        className:'filterslide',
        autoplay: false,
        autoplaySpeed: 3000,
     
        
    
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                // initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
          ]
    
        
    
        
        };
  return (
    <div className={filterBtn}>

        <div  className='FilterBtn'>
        <Slider {...settings}>
           
                
                <button type='button' variant="outlined"    size="small"  className={genres === 0 ? "active" : "" } onClick={()=>setGenres(0)} id="btn">All</button>
                <button type='button'  variant="outlined"   size="small" className={genres === 28 ? "active" : ""} onClick={()=>setGenres(28)} id="btn" >Action</button>
                <button type='button' variant="outlined"  size="small" className={genres ===35 ? "active" : ""} onClick={()=>setGenres(35)} id="btn" >Comedy</button>
                <button type='button' variant="outlined" className={genres === 80 ? "active" : ""} onClick={()=>setGenres(80)} id="btn" >Crime</button>
                <button type='button' variant="outlined" className={genres === 10752 ? "active" : ""} onClick={()=>setGenres(10752)} id="btn" >War</button>
                <button type='button' variant="outlined" className={genres === 10749 ? "active" : ""} onClick={()=>setGenres(10749)} id="btn" >Romance</button>
                <button type='button' variant="outlined" className={genres === 18 ? "active" : ""} onClick={()=>setGenres(18)} id="btn" >Drama</button>
            </Slider >
            
           
        </div>
    </div>
  )
}

export default FilterMovies