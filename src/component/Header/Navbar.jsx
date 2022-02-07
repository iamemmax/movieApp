import React,{useState} from 'react';
import {AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme,    Container } from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';
import DrawerCom from './Drawer';
import  * as FaIcons from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Search from '../Search';

// import SelectInput from '@material-ui/core/Select/SelectInput';

// import menu from "@"


const useStyles = makeStyles({
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


function Navbar() {
    const theme =  useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const classes = useStyles()
    let navLinks = [
        {
        "name":"Home",
        "path":"/",
        
    },
        {
        "name":"Movies",
        "path":"/movies",
    },
        {
        "name":"Episode",
        "path":"/episode",
    },
        {"name":"Trending",
        "path":"/Trending", 
    },
        {"name":"Tv series",
        "path":"/tv", 
    },
    
    ]
    const [openDrawer, setOpenDrawer] = useState(false);
    const [active, setActive] = useState(0);
   
    return( 
        <Container>
     <AppBar>
         <Toolbar>
             <Typography variant="h6" component="h2" color="inherit" >MovieApp</Typography>

                {isMatch ?
                <>
                <div className={classes.btns}>
                <Search />
                   </div> 
                   <div className="search">

                <FaIcons.FaBars className={classes.bar} onClick={()=>setOpenDrawer(true)} />
                   </div>
               <div className="drawer">

                <DrawerCom  open={openDrawer} onClose ={()=>setOpenDrawer(false)} drawerlinkBtn={()=>setOpenDrawer(false)}/>
               </div>

                </>
                :
                <>
                  <Tabs className={classes.navs} onChange={(e, active)=> setActive(active)} value={active}>


                 {navLinks.map((navbarLink, index)=>(
                    <NavLink className={classes.link} to={navbarLink.path}><Tab label={navbarLink.name} key={index} classes={{root:classes.tab}}/></NavLink>


                 ))}
                    </Tabs>
                    
                   <div className={classes.btns}>
                       <Search />
                   </div>  

             <div>

             <Button variant="contained" color="secondary" className={classes.btns}>WatchList</Button>
             </div>
                </>
                }
           
         </Toolbar>
        
     </AppBar>

     <Toolbar />
  </Container>
  
  );
}

export default Navbar;
