import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme)=>({

    singlepage:{
        width:"100%",
        [theme.breakpoints.down("md")]:{
            width:"100%",
        }
        ,
        
        
    
        '& .name h2':{
            padding:"10px 0px",
            fontSize:"25px"
        },
        '& .description ':{
            lineHeight:"30px",
            fontSize:"16px",
            padding:"10px 0px",

        },
        
        '& .previous':{
            margin:"20px 0"
        },
        
        '& .season':{

            '& .heading':{
                fontWeight:"500",
                padding:"20px 10px 10px 0",
                lineHeight:"30px",

            },
            '& .last-name':{
                fontSize:"14px",
                padding:"10px 0"
            },
        },

        '& .rating':{
            display:"flex",
            alignItem:"center",
           
            '& .ratingText':{
                paddingRight:"10px",
            },
            '& .myStars':{
                width:"100px",
                marginTop:"-2px",

            },
            '& .ratingIcon':{
                flexGrow:"1",
                marginRight:"30px",
                // border:"2px solid red"


            }
        },

        '& .videoFrame':{

        },
        '& img':{
            maxWidth:"100%"
        },

    },
        seasonsFilms:{
            
            '& .name':{
                
                    padding:"15px 0",
                    position:"relative",
                   
                },
                '& .card-title':{
                    fontSize:14
                },
                '& .playIcon':{
                    position:"absolute",
                    top:"40%",
                    left:"50%",
                    fontSize:60,
                    transform:"translate(-50%, -50%)",
                    cursor:"pointer",
                    '& a':{
                        
                        backgroundColor:"#333",
                        color:theme.palette.secondary.light,
                       display:"flex",
                       justifyContent:"center",
                       alignItems:"center",
                       padding:10,
                       borderRadius:"50%"
                    }


                }
            }

}))