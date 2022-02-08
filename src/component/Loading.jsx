import React from 'react';
import {makeStyles} from  "@material-ui/styles"
import { LineWave } from  'react-loader-spinner'

const useStyles = makeStyles({
   loader:{
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       height:"200px"
  

   }

})
function Loading() {

    const classes = useStyles()
    
  return (
    	<div className={classes.loader} >
        <LineWave  color="#E28904"  height={100} width={100} />
        </div>
  )
  ;
}

export default Loading;
