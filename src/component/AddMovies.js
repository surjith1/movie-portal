import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
//import App from '../App';

const AddMovies = ({ infoTrailer, setInfoTrailer }) => {

  //const [movieList,setMovieList]= useState([infoTrailer]);
  //console.log(movieList);
  let [name,setName]= useState("");
  let [poster,setPoster]= useState("");
  let [rating,setRating]= useState("");
  let [summary,setSummary]= useState("");
  let [trailer,setTrailer]= useState("");
  let navigate = useNavigate();
  
  const submitHandling = ()=> {
    let newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer
    };
    console.log(newMovie);
    //let arr= [...movieList];
   setInfoTrailer([...infoTrailer,newMovie]);
console.log(newMovie);
    navigate("/movies");
  }
   
  return (
    <div className='add-movies-sec'>
    <form>
    <div className='form-group'>
    <TextField fullWidth label="Name" variant="outlined" onChange={(event)=>setName(event.target.value)}/>
    </div>
    <div className='form-group'>
    <TextField fullWidth label="Poster" variant="outlined" onChange={(event)=>setPoster(event.target.value)} />
</div>

<div className='form-group'>
<TextField fullWidth label="Rating" variant="outlined" onChange={(event)=>setRating(event.target.value)} />
</div>
<div className='form-group'>
<TextField fullWidth label="Summary" variant="outlined" onChange={(event)=>setSummary(event.target.value)} />
</div>
<div className='form-group'>
<TextField fullWidth label="Trailer" variant="outlined" onChange={(event)=>setTrailer(event.target.value)} />
</div>
<div className='form-group add-movie-btn'>
<Button variant="outlined" fullWidth onClick={submitHandling}>Add Movie</Button>
</div>
    </form>
    </div>
  )
}

export default AddMovies