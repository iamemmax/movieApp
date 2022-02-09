import {makeStyles} from "@material-ui/styles"

export const useStyles = makeStyles((theme) =>({


    divContainer:{margin:"3rem 0", paddingBottom:"2rem", position:"relative",

    '& .play':{
       
            position: "absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
            fontSize:"100px",
            cursor:"pointer",
            zIndex:5,
         
    
    }

},
table:{paddengLeft:0},
    heading:{

        fontSize:"20px",
        fontWeight:"600",
        textTransform:"capitalize",
        padding:"0px 10px",

    },

    videoImg:{
        height:"535px",
        backgroundPosition:" top",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        position:"relative",

        [theme.breakpoints.down("md")]:{
            margin:"0"
        }

    },
    title:{
        padding:"20px 10px",
        fontSize:"30px",
        fontWeight:700,

    },
    rating:{
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        padding:"5px 10px",

    },
    ratingIcon:{
        marginTop:"5px"
    },
    overview:{
        lineHeight:"30px",
        padding:"5px 10px",
        fontSize:"14px"

    },
    votes:{
        // display:"flex",
        justifyContent:"space-between",
    },
    company:{
        padding:"5px 10px",
        fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
      
    },
    companyTitle:{
        padding:"5px 0px",

    },
   
       
    overView:{
       width:"80%",
     //   margin:"0px auto"


     },

  
     p:{
      color:"#eee",
      fontSize:"16px",
      textAlign:"center",
      lineHeight:"30px",

     },
     preview:{
        width:"100%",
        position:"absolute",
        inset:"0",
        height:"100%",
        
     },
     close:{
        position: "absolute",
        bottom:"3rem",
        left:'0',
        zIndex:"11"
     },
    

   
   }))