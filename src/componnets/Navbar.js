import { Link } from "react-router-dom";
import './Navbar.css'
import Search from "./Search";
const Navbar = () => {

    //open close the drop down menu on button click
    const showMenu=()=>{
        var x = document.getElementById("menu");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.burger')){

            var dropdown = document.getElementById("menu");
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } 
            
        }
    }
    return ( 
        <div className="navbar ">
            <div className="burger-icon"> <button className="burger" onClick={showMenu}></button></div>
            <div className="logo "> app logo</div>
            <ul id="menu">
                <Link to="/">
                    <li >Home</li>
                </Link>
                <Link to="/results/newreleases/page1">
                    <li >New Releases</li>
                </Link>
                <Link to="/results/popular/page1">
                    <li >Popular</li>
                </Link>    
             
            </ul>
            <div className="search-bar">
                <Search/>
            </div>
            
        </div>
     );
}
 
export default Navbar;