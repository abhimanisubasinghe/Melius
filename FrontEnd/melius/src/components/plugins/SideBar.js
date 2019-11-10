import React, { Component } from 'react'
import './SideBar.css';

class SideBar extends Component {
    
    
    render() {
        return (
            <div>
            <div class="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
            </div>
        )
    }
}

export default SideBar
