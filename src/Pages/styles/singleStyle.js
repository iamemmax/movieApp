import {makeStyles} from "@material-ui/styles"

export const useStyles = makeStyles({


    divContainer:{margin:"3rem 0", paddingBottom:"2rem"},
    heading:{

        fontSize:"25px",
        fontWeight:"600",
        textTransform:"capitalize",
        padding:"10px 10px",

    },

    videoImg:{
        height:"535px",
        backgroundPosition:" top",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"

    },
    title:{
        padding:"20px 10px",
        fontSize:"30px"
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

    }

   
   })