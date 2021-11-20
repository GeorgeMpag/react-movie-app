import apis from "../apiUrls";
import './Moviecard.css'
const Moviecard = ({movie}) => {



const poster= movie.poster_path ? `${apis.image_api}/original/${movie.poster_path}` : "https://st.depositphotos.com/1987177/3470/v/950/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg"

const cutLongTitle  =() =>{
    if (movie.title.length>20)
        return movie.title.substring(0,15)+"..."
    else 
        return  movie.title
}

    return ( 
        <div className="container" onClick={()=>console.log(movie.original_title)}>
            <div className="card">
                
                <div className="poster"><img src={poster} alt="" /></div>
                <div className="line"></div>
                <div className="tittle">{cutLongTitle()}</div>
                <div className="rating"><p>Rating: {movie.vote_average}</p></div>
            </div>
                
           
        </div>
     );
}
 
export default Moviecard;