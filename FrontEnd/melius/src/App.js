import React, { Component } from 'react';
import './App.css';
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
}

export default App;