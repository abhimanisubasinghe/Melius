import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/pages/Login';
import Welcome from './components/pages/Welcome';
import ServiceCenter from './components/pages/ServiceCenter';
import Inventory from './components/pages/Inventory'
import InformationHub from './components/pages/InformationHub'
import ServiceCenterCutomerRegister from './components/pages/ServiceCenterCustomerRegister';
import CustomerRegister from './components/pages/CustomerRegister';
import ItemRegister from './components/pages/ItemRegister';


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
     <Route exact path="/servicecenter" component={ServiceCenter}/> 
     <Route exact path="/customer_register" component={CustomerRegister}/> 
     <Route exact path="/item_register" component={ItemRegister}/> 
     <Route path="/inventory" component={Inventory}/> 
     <Route path="/informationhub" component={InformationHub}/> 
     <Route path="/servicecenter/customer/register" component={ServiceCenterCutomerRegister}/>
    </div>
    </Router>
  );
}

export default App;
