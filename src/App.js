import Navbar from './componnets/Navbar';
import './App.css';
import Carousel from './componnets/Carousel';
import NewReleases from './componnets/NewReleases';
import Moviedetails from './componnets/MovieDetails';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import ResultsPage from './componnets/ResultsPage';


function App() {
   
  
    return (
      <Router>
        <div className="App "> 
          <Navbar/>
          <Switch>
            <Route  exact path="/">
              <div id="carousel">
                <Carousel  />
              </div>
              <NewReleases/>
            </Route>
            <Route  path="/moviedetails/:id">
               <Moviedetails/>
            </Route>
            <Route  path="/results/:searchcontent/page:page_number">
               <ResultsPage/>
            </Route>
            
          </Switch>
        
        </div> 
      </Router>
    );
 
}

export default App;
