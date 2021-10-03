import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import './Search.css'
import apis from '../apiUrls'
import { Link } from "react-router-dom";

const Search = () => {
    const history=useHistory()
    const [value, setValue]=useState('')
    const [debouncedValue, setDebouncedValue]=useState("")
    const [movies, setMovies] = useState(null);
    const apiKey=process.env.REACT_APP_API_KEY;

        // fething data for seach bar
        useEffect(() => {
            const controller = new AbortController();
            fetch(
              apis.search+apiKey+"&query="+debouncedValue,{ signal: controller.signal }
            )
              .then((response) => response.json())
              .then((data) => setMovies(data.results.slice(0,5)))
              .catch((error) => {
                console.log(error);
              });
        
            return () => {
              controller.abort();
            };
          }, [debouncedValue]);
          
        

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!value == "" || !value == null)
        { 
            history.push(`/results/${value}/page1`)
            setValue('')
        }
    }

  
     
    useEffect(() => {
        const handle = setTimeout(() => {
          setDebouncedValue(value);
        }, 400);
    
        return () => {
          clearTimeout(handle);
        };
      }, [value]);

    const showSuggestions=()=>{
      var x=document.getElementById("suggestions")
      if (debouncedValue!=""||debouncedValue!=null)
        x.style.display = "flex";
      if (debouncedValue=="" ||debouncedValue==null)
        x.style.display = "none";
    }
    
    if(movies)
      showSuggestions()
     
    return ( 
       <div>
        <form onSubmit={handleSubmit}>
      
        <input
            type="text"
            id="header-search"
            placeholder="search a movie"
            name="s" 
            value={value}
            autocomplete="off"
            onChange={(e)=>{setValue(e.target.value)
                            setDebouncedValue("")
                            setMovies([])
                           
                            }}
        />
        {/* <button id="submit" type="submit">Search</button> */}
        <div id="suggestions"> 
         
          {movies &&  movies.map(movie =>(
              
              // <Link to={`/moviedetails/${movie.id}`}>
                <div id="sug" onClick={()=>{
                  setDebouncedValue("")
                  setValue("")
                  setMovies([])
                 
                  history.push(`/moviedetails/${movie.id}`)
                  }}>{movie.title} <span>{movie.release_date.substring(0,4)}</span></div>
              // </Link>  
            
            
            ))}
         
        </div>
    </form>
    </div> 
     );
}
 
export default Search;