import React from 'react';
import {useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
//import { themeContext } from '../App';


const TopNavbar = ({mode,setMode}) => {
  //console.log(mode);
  
  let navigate = useNavigate();
  //const [mode, setMode] = useContext(themeContext);
  //console.log(mode);
  return <>
 
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={()=> navigate("/")}>HOME</Button>
        <Button color="inherit" onClick={()=> navigate("/movies")}>MOVIES</Button>
        <Button color="inherit" onClick={()=> navigate("/color-games")}>COLOR GAME</Button>
        <Button color="inherit" onClick={()=> navigate("/add-movies")}>ADD MOVIE</Button>
        <Button color="inherit" onClick={()=>setMode(mode==="dark" ? "light" : "dark")}>{mode} Mode</Button>
      </Toolbar>
    </AppBar>
   

    {/*<ul className='top-navbar-fixed'>
      <li><Link className="active" to="*">HOME</Link></li>
      <li><Link to="/movies">MOVIES</Link></li>
      <li><Link to="/color-games">COLOR GAME</Link></li>
      <li><Link to="/add-movies">ADD MOVIE</Link></li>
      <li><Link to="/mode">LIGHT MODE</Link></li>
</ul>*/}

  </>
}

export default TopNavbar