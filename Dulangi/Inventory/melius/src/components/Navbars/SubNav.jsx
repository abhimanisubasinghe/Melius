import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand
  } from "react-bootstrap";


export default class SubNav extends Component {
    
    constructor(props) {
        super(props)
        

        this.state = {
            header : this.props.header,
            menuItems: (this.props.menuItems).map((navItem) => <NavItem href="#home">{navItem}</NavItem>)  
        }
    }
    render() {
        
        return (
            <div>
                <Navbar style={navStyle}>
                    <Nav className="mr-auto" >
                        <NavbarBrand style={cursorStyle}>{this.state.header}</NavbarBrand>  
                            <NavItem href="#home">Home</NavItem>
                            <NavItem href="#features">Features</NavItem>
                            <NavItem href="#pricing">Pricing</NavItem>
                    </Nav>
   
                </Navbar>
            </div>    
        )
    }
}


const navStyle = {
    backgroundColor: '#262626'
  }

const cursorStyle = {
    cursor : 'pointer'
}  
