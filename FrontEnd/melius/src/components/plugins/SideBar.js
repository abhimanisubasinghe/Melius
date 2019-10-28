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
                    <button class="dropdown-btn">Dropdown 
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-container">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    <a href="#contact">Search</a>
                </div>
            </div>
        )
    }
}

export default SideBar
