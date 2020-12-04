// Stylsheet
import './App.css';
// React Modules
import { Component, Fragment } from 'react';
// Components
import Submission from './Submission.js'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
render(){
    return(

      <Fragment>
        <div className="container">
          <ul>  
              <li>
                <h1><div className="arteria">arteria</div> <div className="description">— a new curatorial tool</div></h1>
              </li>
              <li className="arrow">              
                <a href="#savedProjects"><FontAwesomeIcon icon={faArrowDown} /></a>            
              </li>        
          </ul>
          <Submission />
        </div>      
    </Fragment>
  )}
}

export default App;
