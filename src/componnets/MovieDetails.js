import apis from '../apiUrls'
import useFetch from '../useFetch';
import { useParams } from 'react-router';
import './MovieDetails.css'
const Moviedetails = () => {
    const {id} = useParams(); 
    const apiKey=process.env.REACT_APP_API_KEY;
    const {data: movie, pending, error}=useFetch(apis.movie_details+id+"?api_key="+apiKey);
 
    if (pending) return (<div> LOADING........ </div>)
    const poster= movie.poster_path ? `${apis.image_api}/original/${movie.poster_path}` : "https://st.depositphotos.com/1987177/3470/v/950/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg"
    console.log(movie)
    return (
     <div className="m-details">
         <div id="details">
            <div className="m-title"><h1>{movie.title}</h1> </div>
            <div className="m-runtime"><p> {movie.runtime} min</p></div>
            <div className="m-poster_summary">
                <div className="m-poster"> <img src={poster} alt="" /></div>
                <p>{movie.overview}</p>
            </div>
         </div>



    </div> 
    );
}
 
export default Moviedetails;