import React from 'react';
//import logo from './logo.svg';
import './Registerforms.css';
import Vehiclereg from './Vehiclereg/Vehiclereg';
import Customerreg from './customer/Customerreg';

function Registerforms() {
  return (
    <div className="Registerforms">
      <Vehiclereg/>
      <Customerreg/>
         
        </div>
  );
}

export default Registerforms;
