import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NavLink} from "react-router-dom"
import React from 'react';
import  * as AiIcons from "react-icons/ai";
import  * as FaIcons from "react-icons/fa";
import  * as SiIcons from "react-icons/si";
import { makeStyles } from '@material-ui/styles';


const drawerWidth = 200
const useStyles = makeStyles({
    drawer:{
        width:drawerWidth

        
    },
    drawerLink:{
        textDecoration:"none",
        lineHeight:"50px",
        fontFamily:" 'Poppins', sans-serif;font-family: 'Montserrat', sans-serif"
    },
    active:{
        color:"red"
    }
})
const DrawerCom = ({open, onClose, drawerlinkBtn}) => {
const classes = useStyles()
let navLinks = [
    {
    "name":"Home",
    "path":"/home",
    "icon" : <AiIcons.AiOutlineHome/>
},
    {
    "name":"Movies",
    "path":"/movies",
    "icon" : <AiIcons.AiOutlineVideoCamera/>
},
    {
    "name":"Episode",
    "path":"/episode",
    "icon" : <AiIcons.AiOutlineCompass/>
},
    {"name":"Trending",
    "path":"/Trending", 
    "icon": <SiIcons.SiTrendmicro/>    
},
    {"name":"Tv series",
    "path":"/tv", 
    "icon": <FaIcons.FaTv/>    
},

]
  return (
  
//   <div>
      <Drawer open={open} onClose={onClose} classes={{paper:classes.drawer}}>
        <List>
            {navLinks.map((links, index) =>(

                
                <ListItem button key={index}>
                <ListItemIcon>
                    {links.icon}
                </ListItemIcon>
                    <ListItemText key={index}><NavLink to={links.path}  className={classes.drawerLink} onClick={drawerlinkBtn}>{links.name}</NavLink></ListItemText>
            </ListItem>
                ))}
        </List>
      </Drawer>
  /* </div> */
  
  )
  
};

export default DrawerCom;
