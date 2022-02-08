import { makeStyles } from "@material-ui/styles"
export const useStyles = makeStyles({
    logo:{
        textDecoration:"none",
        color:"#fff"
    },
    navs:{
        marginLeft:"auto"
    },
    btns:{
        marginLeft:"auto",
        color:"#fff"
    },
    labelContainer: {
        padding: 0,
    },
    bar:{
        marginLeft:"auto",
        fontSize:30,
        cursor:"pointer"
    },
    search:{
        margin:"0px auto",
        outline:"none",
        border:"none",
        // height:"30px",
        backgroundColor:"#fff",
        padding:"5px 20px",
        borderRadius:50,
        width:"100%",
        paddingRight:"3rem",
        position:"relative"
        
    },
    tab:{
        width:120,
        minWidth:120,
        textTransform:"capitalize",
        fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif",
        fontSize:16,
        transition:'color .5s ease',
        '&:hover':{color:"#e28904"},

        
    },
    active:{
        backgroundColor:"#e28904",
        borderBottom:"none",
    },
    searchBtn:{
        position:"absolute",
        right:"-2rem",
        top:"50%",
        color:"#e28904",
        zIndex:5,
        transform:"translate(-50%, -50%)",
        cursor:"pointer",
        fontSize:20
    },
    
    link:{
        textDecoration:"none",
        color:"#fff"
    }

})