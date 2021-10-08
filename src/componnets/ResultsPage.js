import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import apis from '../apiUrls'
import useFetch from '../useFetch';
import { Link } from "react-router-dom";
import Moviecard from "./Moviecard";
import ReactPaginate from 'react-paginate';
import './ResultsPage.css'
const ResultsPage = () => {
    const {searchcontent}=useParams();
    const {page_number}=useParams();
    const apiKey=process.env.REACT_APP_API_KEY;
    const [url, setUrl]=useState("")
    const history=useHistory();
   
    
    // Getting Todaday day for the api call
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear(); 
    var todaydate=`${yyyy}-${mm}-${dd}`

    useEffect (()=>{
        if (searchcontent==="popular"){
            setUrl(apis.popularMovies_api+apiKey+"&page="+page_number)
        }else if (searchcontent==="newreleases"){
           
        setUrl(apis.movies+apiKey+"&sort_by=primary_release_date.desc&primary_release_date.gte=1900-01-01&primary_release_date.lte="+todaydate+"&with_release_type=2%7C3&page="+page_number)
   
        }
        else setUrl(apis.search+apiKey+"&query="+searchcontent+"&page="+page_number)
            
    },[searchcontent,page_number])
  
    const {data: movies, pending, error_movies}=useFetch(url);
   
    if (pending) return <div>LOADING</div>


    console.log(movies)
    const changePage=({selected})=>{
        history.push(`/results/${searchcontent}/page${selected+1}`)
        window.scrollTo(0, 0);
        
    }; 
    
        return ( 
        <div className="r-page">
            <div id="page">
            {movies &&  movies.results.map(movie =>(
            <div className="r-movie"> 
            <Link to={`/moviedetails/${movie.id}`}>
              <Moviecard movie={movie}/>
            </Link>  
              </div>
           
          ))}

         
         {movies&&<ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'. . .'}
                breakClassName={'break'}
                pageCount={movies.total_pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={4}
                onPageChange={changePage}
                containerClassName={'pagination'}
                activeClassName={'active'}
                
                />}
            </div>
           
       
        </div> 
        
        );
}
 
export default ResultsPage;