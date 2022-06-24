 import {useEffect, useState} from 'react'
import './App.css';
import MovieCard from './MovieCard';

function App() {

  const API_URL ="https://api.themoviedb.org/3/movie/popular?api_key=fa1192549721df01a1fb28a7788e6608"
  const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=fa1192549721df01a1fb28a7788e6608&query="


  const [movies, setMovies]= useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results)
    } )
  },[])



    console.log(movies)
   
    
    const handleSubmit = (e) =>{
      e.preventDefault();

      fetch(API_SEARCH+searchTerm)
        .then((res) => res.json())
        .then(data => {
        setMovies(data.results)
      })
    }

      console.log(searchTerm)
  return (
    <div className="App">
      
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setSearchTerm(e.target.value)} />
          <button type='submit' >Submit</button>
        </form>
      </div>

      <div className='appContainer'>
        {
          movies.map(el => (
            <MovieCard key={el.id} {...el}  />
        ))}
       </div> 
       
       </div>
    
  );
}

export default App;
