import React,{useState} from 'react';
import {AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, Container } from "@material-ui/core"
import DrawerCom from './Drawer';
import  * as FaIcons from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Search from '../Search';
import {useStyles} from "./styles/navbar"






function Navbar() {
    const theme =  useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const {mobile, laptop, logo, tab} = useStyles()

    let navLinks = [
        
        {
        "name":"Movies",
        "path":"/",
    },
    {"name":"Tv series",
        "path":"/tv", 
    },
    
        {
        "name":"Episode",
        "path":"/episode",
    },
        {"name":"Trending",
        "path":"/Trending", 
    },
        
    ]
    const [openDrawer, setOpenDrawer] = useState(false);
    const [active, setActive] = useState(0);
   
    return( 
        <Container>
     <AppBar>
         <Toolbar>

                {isMatch ?
               
                <div className={mobile}>
                    <div className="logo">
                             <Typography variant="h6" component="h2" color="inherit" ><Link to="/" >MovieApp</Link></Typography>
                            
                            </div>  
                    
                        {/* <div className="search" > */}
                        <Search  className="searchBbar" />
                        
                    {/* </div>  */}
                    <div className="menu">
                        <FaIcons.FaBars className="bar" onClick={()=>setOpenDrawer(true)} />
                    </div>

                    

                <div className="drawer">

                <DrawerCom  open={openDrawer} onClose ={()=>setOpenDrawer(false)} drawerlinkBtn={()=>setOpenDrawer(false)}/>
    </div>
                </div>
                :
                <div className={laptop}>
                        <div className="logo">
                             <Typography variant="h6" component="h2" color="inherit" ><Link to="/"  className={logo} >MovieApp</Link></Typography>
                            
                            </div>                      
                      
                        <div className="navigation">
                        <Tabs className="tabs" onChange={(e, active)=> setActive(active)} value={active}>


                            {navLinks.map((navbarLink, index)=>(
                                <NavLink to={navbarLink.path}  key={index}><Tab label={navbarLink.name} classes={{root:tab}}/></NavLink>


                            ))}
                        </Tabs>
                        </div>
                    
                   <div className="search">
                       <Search />
                   </div>  

                <div className="watchList">

                    <Button variant="contained" color="secondary" className="watchList">WatchList</Button>
                </div>
                </div>
                }
           
         </Toolbar>
        
     </AppBar>

     <Toolbar />
  </Container>
  
  );
}

export default Navbar;
