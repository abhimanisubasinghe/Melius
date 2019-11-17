import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import Welcome from './components/pages/Welcome';
import ServiceCenter from './components/pages/ServiceCenter';


function App() {
  return (
    <Router>
    <div className="App">
     {/*<BasicPage/>*/  }
     <Route exact path="/" render={ props => (
       <React.Fragment>
       {<Login/>}
       </React.Fragment>  
      )}/>
     <Route path="/welcome" component={Welcome}/> 
     <Route path="/servicecenter" component={ServiceCenter}/> 
    </div>
    </Router>
  );
}

export default App;
