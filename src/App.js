
import './App.css';
import api from './api/axiosConfig';
import {useState,useEffect} from 'react'; /*hook*/

function App() {

  const [movies,setMovies]=useState(); 
  const getMovies = async () =>{

    try
    {
      const response = await api.get("/api/vl/movies"); //mangaing thread functionality on client
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
   <p>helo React</p>
    </div>
  );
}

export default App;
