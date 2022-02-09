import { makeStyles } from "@material-ui/styles"
export const useStyles = makeStyles((theme) => ({
    laptop:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",

        '& .logo a':{
            color:"#fff",
            textDecoration:"none",
        },
        '& .navigation a':{
            color:"#eee",
            textDecoration:"none",
            transition:"color .3s ease",

            '&:hover':{
            color:theme.palette.secondary.main,
            
            }
        }
    },


    tab:{
        width:120,
        minWidth:120,
        textTransform:"capitalize",
        fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif",
        fontSize:16,
        transition:'color .5s ease',
        // '&:hover':{color:"#e28904"},

        
    },
    
    mobile:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",

        '& .logo a':{
            color:"#fff",
            textDecoration:"none",
        },
        
        
      
       
        '& .drawer':{
            position:"absolute"
        },
       
        '& .menu':{
            cursor:"pointer",

            '& >  .bar':{
                fontSize:"30px"
            }

        }
    },

}))
