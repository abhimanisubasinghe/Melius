import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
//import logo from './logo.svg';
import LoginForm from './components/login/LoginForm';
//import Profile from './components/login/profile';

// function App() {
//   return (
//     <div className="App">
//       {products.map(this.renderProduct)}
//      {/*<BasicPage/> */ }
//      {/* {<LoginForm />} */}
//     </div>
//   );
// }



//export default App;

class App extends Component {
  
  render() {
  //function App() {
    return(
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to REact</h1>
        </header>
        <p className="App-intro">{this.state.appResponse}</p> */}

        {<LoginForm />}
        {/* {<Profile />} */}

      </div>
    );
  }
>>>>>>> connect login back and front
}

export default App;