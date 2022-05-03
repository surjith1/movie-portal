import './App.css';
import MovieName from './component/MovieName';
import TopNavbar from './component/TopNavbar';
import Home from './component/Home';
import ColorGames from './component/ColorGames';
import AddMovies from './component/AddMovies';
import Mode from './component/Mode';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  let data = [
    {
      url: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      titleName: "RRR",
      rating: "8.8",
      description: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V.Danayya of DVV Entertainments.",
      videoUrl:"https://www.youtube.com/watch?v=wKtcmiifycU&t=33s"
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      titleName: "Iron man 2", rating: "7",
      description: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military.He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands.With Pepper Potts(Gwyneth Palt = row) and Rhodes(Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      videoUrl:"https://www.youtube.com/watch?v=wKtcmiifycU&t=33s"},
     {
        url: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5.V1_FMjpg_UX1000_.jpg",
        titleName: "Jai Bhim",
        rating: "8.8",
        description: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        videoUrl:"https://www.youtube.com/watch?v=wKtcmiifycU&t=33s"},
     {
      url: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
     titleName: "Ratatouille",
      rating: "8.8",
      description: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      videoUrl:"https://www.youtube.com/watch?v=wKtcmiifycU&t=33s"},
     {
          url: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
          titleName: "Baahubali",
          rating: "8",
          description: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict- ridden past of his family and his true legacy.",
          videoUrl:"https://www.youtube.com/watch?v=wKtcmiifycU&t=33s"},
    ];
  return <>
  <BrowserRouter>
  <div className='top-sec'>
  <TopNavbar />
  </div>
  <div className='main-content'>
  <Routes>
  <Route path="*" element={<Home />}></Route>
  <Route path="/movies" element={<MovieName data={data} />}></Route>
  <Route path="/color-games" element={<ColorGames />}></Route>
  <Route path="add-movies" element={<AddMovies />}></Route>
  <Route path="/mode" element={<Mode />}></Route>
  </Routes>
  </div>
    </BrowserRouter>
  </>
}

export default App;
