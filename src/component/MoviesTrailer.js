import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'


const MoviesTrailer = ({infoTrailer}) => {

  const { id } = useParams();
  let navigate = useNavigate();
  
  let idvalue= id.replace(":","")
  const movie = infoTrailer[idvalue];
  return <>
  <div className="movie-desc">
  <iframe width="1317" height="570" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div className="movie-container" key={id}>
  <div className="movie-specs">
          <h2 className="movie-name">{movie.name}
          
          </h2>
          <p className="movie-rating" style={{color: movie.rating > 8 ? "green" : "red"}}>⭐ {movie.rating}</p>
        </div>
        <Card variant="outlined">
        <CardContent>
        {movie.summary}
        </CardContent>
        </Card>
        <div className='top-margin-10'>
        <Button variant="outlined" startIcon={<NavigateBeforeIcon />} onClick={()=>navigate(-1)}>
  Back
</Button>
</div>
</div>
</div>

  {/*{
  movie.map((mv,index)=>{
    return <>

    <iframe width="1317" height="570" src={mv.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="movie-container" key={index}>
    <div className="movie-specs">
            <h2 className="movie-name">{mv.name}
            
            </h2>
            <p className="movie-rating" style={{color: mv.rating > 8 ? "green" : "red"}}>⭐ {mv.rating}</p>
          </div>
          <p className="movie-summary">{mv.summary}</p>
  </div>
    </>
  })
}*/}
  </>
}

export default MoviesTrailer