import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const MovieName = ({url,titleName,rating,description,videoUrl}) => {
  const [like,setLike]= useState(0);
  const [dislike,setDislike]= useState(0);
    let navigate= useNavigate();
    const goYouTube=()=>{
       console.log("clicking")
        let video={videoUrl};
        navigate({video});
    }
        return <>
        <div className="movie-container" key={titleName}>
            
                  <img src={url} alt="{titleName}" className="movie-poster" />
                   <div className="movie-specs">
                    <h2 className="movie-name">{titleName}
                    
  <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium css-qngigf" tabIndex={0} type="button" aria-label="Toggle description">
    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandLessIcon"><path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" /></svg><span className="MuiTouchRipple-root css-w0pj6f" /></button>
    <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium css-qngigf" tabIndex={0} type="button" aria-label="Toggle description" onClick={goYouTube}>
    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InfoIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
    <span className="MuiTouchRipple-root css-w0pj6f" />
  </button>
</h2>
                    <p className="movie-rating">⭐ {rating}</p>
                    </div>
                    <p className="movie-summary">{description}</p>
                                  
                    <div className="MuiCardActions-root MuiCardActions-spacing css-3zukih"><div className="counter-container">
                    <button 
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium bt-sz-lg css-qngigf" tabIndex=
                    {0} type="button" aria-label="like movie" onClick={()=>{setLike(like+1)}}><span className="MuiBadge-root css-1rzb3uu" onClick={()=>{setLike(!like)}}>👍<span 
                    className={`MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary MuiBadge-badge 
                    MuiBadge-standard MuiBadge-anchorOriginTopRight ${like ? "MuiBadge-visible" : "MuiBadge-invisible"} css-1wi0wlk`}>{like}</span></span><span className="MuiTouchRipple-root 
                    css-w0pj6f" /></button>
                    <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorError MuiIconButton-sizeMedium 
                    bt-sz-lg css-wkkrd0" tabIndex={0} type="button" aria-label="dislike movie" onClick={()=>{setDislike(dislike +1)}}><span className="MuiBadge-root css-1rzb3uu" onClick={()=>{setDislike(!dislike)}}>👎<span 
                    className={`MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorError MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight ${dislike ? "MuiBadge-visible":"MuiBadge-invisible"} css-136xit8`}>{dislike}</span></span><span className="MuiTouchRipple-root 
                    css-w0pj6f" /></button>
                    </div> <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorError 
                    MuiIconButton-sizeMedium css-wkkrd0" tabIndex={0} type="button"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium 
                    css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 
                    2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg><span className="MuiTouchRipple-root css-w0pj6f" /></button> <button 
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorSecondary MuiIconButton-sizeMedium css-139qugf" tabIndex={0} 
                    type="button"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 
                    0 24 24" data-testid="EditIcon"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.
                    34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg><span className="MuiTouchRipple-root css-w0pj6f" /></button>
                     </div>
            </div>


            </>
}

export default MovieName