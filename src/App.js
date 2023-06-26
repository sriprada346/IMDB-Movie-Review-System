
import './App.css';
import api from './api/axiosConfig';
import {useState,useEffect} from 'react'; /*hook*/
import Layout from './component/Layout';
import {Routes,Route} from 'react-router-dom';
import Home from './component/home/Home';

function App() {

  const [movies,setMovies]=useState(); 
  const [page,setPage] = useState(false);

  const getMovies = async () =>{

    try
    {
      console.log("hello it came here");
      const response = await api.get('/api/vl/movies'); //mangaing thread functionality on client
      console.log('this is reponse.data!!! : ',response.data);
      setMovies(response.data);
    }
    catch(err)
    {
      console.log('this is err!!! : ',err);
    }
  }

  useEffect(() =>{
    getMovies();
  },[])

  return (
    <div className="App">

      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home movies={movies}/>}></Route>
          </Route>
      </Routes>


   
    </div>
  );
}

export default App;
