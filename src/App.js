import Navbar from './componnets/Navbar';
import './App.css';
import Carousel from './componnets/Carousel';
import NewReleases from './componnets/NewReleases';
import Moviedetails from './componnets/MovieDetails';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import ResultsPage from './componnets/ResultsPage';


function App() {
   
  
    return (
      <div className="App"> 
      <Router >
        
          <Navbar/>
          <Switch>
            <Route  exact path="/">
             <div className="a_container"> 
                <div id="carousel">
                  <Carousel  />
                </div>
              </div>
              <div className="a_container"> 
                <NewReleases/>
              </div>
            </Route>
            <Route  path="/moviedetails/:id">
            <div className="a_container"> 
              <div id="m-details"> 
                <Moviedetails />
              </div>
            </div>
            </Route>
            <Route  path="/results/:searchcontent/page:page_number">
              
               <ResultsPage/>
              
            </Route>
            
          </Switch>
        
     
      </Router>
      </div> 
    );
 
}

export default App;
