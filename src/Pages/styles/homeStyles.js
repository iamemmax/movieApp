import {makeStyles} from "@material-ui/styles"

export const useStyles = makeStyles({
    grids:{
      margin:"150px",
     //  border:"2px solid red",
     },
     trend:{
       margin:"10px",
       
    },
    banner:{
      height:500,
      backgroundPosition:"top center",
      backgroundSize:"cover",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      position:"relative",
      objectFit:"color",
      overflow:"hidden",
      maxWidth:"100%",
   
      '&::after': {
       position:"absolute",
       content:"",
       display:"block",
       left:0,
       top:0,
       width:'100%',
       height:'100%',
       backgroundColor:"#000",
       zIndex:9
        }
   
     },
     text:{
         backgroundColor:"#06070846",
         width:"100%",
         //textAlign:"center",
         zIndex:10,
         padding:'20px 40px',
         margin:"0px auto"
        },

        title:{
         color:"#fff",
         fontWeight:700,
         fontSize:45,
         padding:'10px',

  
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
         height:"500px",
         
      },
      close:{
         position: "absolute",
         bottom:"3rem",
         left:'0',
         zIndex:"11"
      }
   
   
   })