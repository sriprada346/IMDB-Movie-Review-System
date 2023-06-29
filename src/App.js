
import './App.css';
import api from './api/axiosConfig';
import {useState,useEffect} from 'react'; /*hook*/
import Layout from './component/Layout';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'; 
import Home from './component/home/Home';
import Header from './component/header/Header';
import Trailer from './component/trailer/Trailer';
import Reviews from './component/reviews/Reviews';
import NotFound from './component/notfound/NotFound';
import { Outlet,Link } from 'react-router-dom';

function App() {

  const [movies,setMovies]=useState(); 
  const [movie,setMovie] = useState();
  const [reviews,setReviews] = useState([]);

  const getMovies = async () =>{

    try
    {
      console.log("it get's the full movies data");
      const response = await api.get('/api/vl/movies'); //mangaing thread functionality on client
      console.log('this is reponse.data!!! : ',response.data);
      setMovies(response.data);
    }
    catch(err)
    {
      console.log('this is err!!! : ',err);
    }
  }

 

 
  const getMoviesData = async (movieId) => {
    try{
        const response = await api.get(`/api/vl/movies/${movieId}`);
        const singleMovie = response.data;

        
        
        //console.log('the length is',singleMovie.reviews.length);
        
        console.log('hetre comes single movie data',singleMovie.reviewIds[0].body);
        console.log('hetre comes single movie data',singleMovie.reviewIds[1].body);
        setMovie(singleMovie);  
        setReviews(singleMovie.reviews);
        setReviews([]);

        //setReviews(singleMovie.reviews);

       /* if (singleMovie.review && singleMovie.reviewsId.length > 0) {
          console.log("here");
          
          
        } else {
          console.log("passes array");
          setReviews([]); // Set an empty array if reviews are null or undefined
          singleMovie.reviewIds.forEach((review) => {
            console.log(review.body);
          });
        }
        */

    }
    catch(error)
    {
        console.error(error);
    }

  }

  useEffect(() =>{
    getMovies();
  },[])



  return (
    <div className="App">
      <Header/>
  
        <Routes>
         <Route key="layout-route" path="/" element={<Layout/>}>
              <Route key="home-route" index element={<Home movies={movies}/>}></Route>
              <Route key="reviews-route" path="/Reviews/:movieId" element = {<Reviews getMoviesData={ getMoviesData } reviews ={ reviews } movie={ movie }  setReviews = { setReviews } />}></Route>
              <Route key="trailer-route" path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route> 
         </Route>
      </Routes>  

 {/* <Routes>
  <Route path="/" element={<Layout/>}>

    <Route index element={<Reviews getMoviesData={getMoviesData} movie={movie} reviews={reviews} setReviews={setReviews} />}/>

  </Route>
</Routes>  */}
       

   
    </div>
  );

 
/*
  return(

    <div className="App">
      <Header/>
      <Link to="/" element={<Layout/>}/>
      <Link to="/" element={<Home movies={movies}/>}/>
      <Link to="/:movieId" element = {<Reviews getMoviesData={ getMoviesData } movie={ movie } reviews ={ reviews } setReviews = { setReviews } />}/>


    <Outlet/>
    </div>
  );
  */

  







  }

export default App;











