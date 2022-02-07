import { makeStyles } from '@material-ui/styles';

 export const useStyles = makeStyles({
 title:{
   fontSize:14
 },
 card:{
  margin:7,
  position:"relative"
}, 
MovieAction:{
position:"absolute",
top:"45%",
left:0,
right:0,
transform:"translate(-50% -50%)",
width:"100%",
display:"none",
justifyContent:"space-between",
alignItems:"center",
padding:"10px 0",



},

showMovieAction:{
 display:"flex",
 position:"absolute",
top:"45%",
left:0,
right:0,
transform:"translate(-50% -50%)",
width:"100%",
justifyContent:"space-between",
alignItems:"center",
padding:"10px 0",
}
 
})