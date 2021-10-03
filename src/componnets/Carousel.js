import apis from '../apiUrls'
import useFetch from '../useFetch';
import './Carousel.css'
import { useState, useEffect  } from 'react';
import iconLeft from '../icons/Chevron-Left.png'
import iconRight from '../icons/Chevron-Right.png'
import { Link } from 'react-router-dom';
// import {movieCarouselData} from './CarouselData'



const Carousel = () => {
    const apiKey=process.env.REACT_APP_API_KEY;
    const {data: movies, pending, error_movies}=useFetch(apis.popularMovies_api+apiKey);
    const [currMovie,setCurMovie]=useState(0)
   
  
    
    useEffect(() => {
        var temp=currMovie
        const interval = setInterval(() => {
           
            if (temp==movies.results.length-1)
                temp=0;
            else    
                temp++
            setCurMovie( temp);
            
           
        }, 12000);
        
        return () => clearInterval(interval);
      }, movies);
      


    if(pending)  return <div>LOADING.......</div>
    
          const backdrop= movies.results.map(movie=>{
        return `${apis.image_api}/w780/${movie.backdrop_path}`
        
    })
  
        
        return ( 

            <div className="body"> 
               <div className="image-banner">
                   <img src={backdrop[currMovie]} alt="" />
                   <div className="btn left" > <img src={iconLeft} alt="left popular arrow" onClick={()=>{currMovie>0 ? setCurMovie(currMovie-1):setCurMovie(movies.results.length-1)}}/></div>
                    <div className="btn right" ><img src={iconRight} alt="right popular arrow" onClick={()=>{currMovie<movies.results.length-1 ? setCurMovie(currMovie+1):setCurMovie(0)}}/></div>
                </div> 
                <section id="details">
                <div className=" movie-details "> 
                    <Link to={`/moviedetails/${movies.results[currMovie].id}`}>
                    <h1>{movies.results[currMovie].title}</h1>
                    </Link>
                      
                        <div id="rating">
                            
                            <span>{movies.results[currMovie].vote_average}</span>
                            
                        </div>
                    
                    
                    <p id="summary">{movies.results[currMovie].overview}</p>
                    
                    
                </div>
                </section>
               
                
               
            </div> 
            );

    
}
 
export default Carousel;