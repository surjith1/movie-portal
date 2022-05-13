import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Badge from '@mui/material/Badge';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MovieName = ({infoTrailer}) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [toggle, setToggle] = useState();
  let navigate = useNavigate();
  const movieList = [...infoTrailer];

  return <>
    <div className="movie-list">
    
    
      {movieList.map((mv,index) => {
        return <div className="movie-container" key={index}>
        
          <img src={mv.poster} alt={mv.name} className="movie-poster" />
          <div className="movie-specs">
            <h2 className="movie-name"><span>{mv.name}</span>
              <span className="icons-fw" onClick={() => setToggle(!toggle)} >
                {toggle ? <><IconButton aria-label="arrow down" color="primary">
                <KeyboardArrowDownIcon />
              </IconButton></> : <><IconButton aria-label="arrow Up" color="primary">
              <KeyboardArrowUpIcon />
            </IconButton></>}
            <IconButton aria-label="Info" color="primary" onClick={()=>navigate(`/movies:${index}`)}>
            <InfoIcon />
          </IconButton>
              </span>

             
            </h2>
            <p className="movie-rating" style={{color: mv.rating > 8 ? "green" : "red"}}>⭐ {mv.rating}</p>
          </div>
          {/*<p className={`movie-summary ${toggle ? "dis-none" : "dis-block"}`}>{mv.summary}</p> */} 
          <Card variant="outlined">
          <CardContent>
          {mv.summary}
          </CardContent>
          </Card>
          <div className="top-margin-10">

            <IconButton aria-label="like" color="primary" onClick={() => { setLike(like + 1) }}>

              <Badge badgeContent={like} color="primary">
                👍
              </Badge>
            </IconButton>
            <IconButton aria-label="like" color="primary" onClick={() => { setDislike(dislike + 1) }}>
            <Badge badgeContent={dislike} color="error">
            👎
          </Badge>
              
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <EditIcon />
            </IconButton>

          </div>
        </div>
      })}




    </div>
  </>
}

export default MovieName