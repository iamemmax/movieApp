import React,{useState} from 'react';
import {AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme,    Container } from "@material-ui/core"
import DrawerCom from './Drawer';
import  * as FaIcons from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Search from '../Search';
import {useStyles} from "./styles/navbar"
// import SelectInput from '@material-ui/core/Select/SelectInput';

// import menu from "@"





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
             <Typography variant="h6" component="h2" color="inherit" ><Link to="/"  className={classes.logo} >MovieApp</Link></Typography>

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
