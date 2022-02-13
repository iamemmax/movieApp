import { makeStyles } from "@material-ui/core"


export const useStyles = makeStyles((theme)=>({
    TvWrappaer:{position:"fixed", left:"4rem", right:"0", width:"91%",display:"flex",
    justifyContent:"center",
    alignItems:"center",zIndex:"999" },
    tvContainer:{
        width:"100%",position:"relative",


        '& .title':{paddingTop:"50px", fontWeight:500},
        '& .filter':{
            padding:"20px 0",
            
            '& > button':{
                margin:"10px",
                borderRadius:"50px"
            },
            '&  .active':{
               backgroundColor:theme.palette.secondary.main,
               color:"#fff",
               border:"none"
            },
        }
    },

    card:{
        position:"relative",
        margin:"5px",

    },

    title:{
        fontSize:"14px"
    },
    tvActionBtnsBox:{
        position:"absolute",
        top:"45%",
        left:"0px",
        width:"100%",
        transform:"translateY(-50%)",
        
        
        '& .middle-container':{
            display:"flex",
            justifyContent:"space-between",  
            transform:"scale(0)",
            transition: "transform .5s ease"

,

        '&  * a':{
            // width:"40px"
            textDecoration:"none"
        },

        

        },
        '& .showAction':{
            transform:"scale(1)",
    
            },
    }
}))