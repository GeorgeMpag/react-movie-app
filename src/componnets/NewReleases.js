import apis from '../apiUrls'
import useFetch from '../useFetch';
import Moviecard from './Moviecard';
import './NewReleases.css' 
import { Link } from 'react-router-dom';
import iconLeft from '../icons/Chevron-Left.png'
import iconRight from '../icons/Chevron-Right.png'
import { useRef } from 'react';

const NewReleases = () => {

  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // var yyyy = today.getFullYear();
  // var todaydate=`${yyyy}-${mm}-${dd}`
  const apiKey=process.env.REACT_APP_API_KEY;
  const {data: newmovies, isPendingnew, errornew}=useFetch(apis.movies+apiKey);
  const ref=useRef(null)
 
  const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
  };

    return ( <div>
        <div className="new-releases">
          <div id="line">
            <Link to="/results/newreleases/page1">  
              <h2>New Releases</h2>
            </Link>
          </div>
          
            
          <div className="cards"  ref={ref}>
            
            {newmovies &&  newmovies.results.map(movie =>(
              <div className="new-movie"> 

                <Link to={`/moviedetails/${movie.id}`}>
                  <Moviecard movie={movie}/>
                </Link>  
              </div>

            ))}
            {/* styled on new releases.css */}
            <div className="btn left" > <img src={iconLeft} alt="left popular arrow" onClick={() => scroll(-window.innerWidth*.75)}/></div>
            <div className="btn right"> <img src={iconRight} alt="right popular arrow" onClick={() => scroll(window.innerWidth*.75)}/></div>
          </div>

          
        </div>
    </div> );
}
 
export default NewReleases;