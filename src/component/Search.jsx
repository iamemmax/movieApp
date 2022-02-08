import React, {useState} from 'react';
import { IconButton, InputBase } from '@material-ui/core';
// import  * as AiIcons from "react-icons/ai";
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import {SearchQuery} from "../Redux/action/HomepageAction"



const useStyles = makeStyles({
    
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
    
    

})
function Search() {
    //const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const dispatch = useDispatch()
    
    dispatch(SearchQuery(query))
  
const handleQuery =(e)=>{
    setQuery(e.target.value)
}
    const classes = useStyles()
  return (
  <div>
                       <IconButton>
                      

                   <InputBase  placeholder='search ......' color='secondary' elevation={0} onInput={handleQuery} value={query}  classes={{root:classes.search}}/>

                       </IconButton>
  </div>
  
  );
}

export default Search;
