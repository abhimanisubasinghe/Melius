import React from 'react'
import './CurtainBar.css';

export default function CurtainSideBar() {
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
    }
      
      /* Close */
    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
    } 

    return (
        <div>
            <div id="myNav" className="overlay">
                <a href="javascript:void(0)" className="closebtn" onClick={()=>closeNav()}>&times;</a>
                <div className="overlay-content">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>

            </div>

            <span style={spanStyle} onclick={()=>openNav()}> &#9776; open</span>            
        </div>
    )
}

const spanStyle={
    cursor:'pointer'
}