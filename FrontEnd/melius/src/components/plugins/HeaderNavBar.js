//import React from 'react';
//import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-route-dom';
import Registerforms from '../registerforms/Registerforms';

import React, { Component } from 'react'
import LogOutBtn from './LogOutBtn'


class HeaderNavBar extends Component {
    
    originalList = this.props.listItems

    modifyList(active){
        let formattedList = this.originalList.map(listItem => 
            {
                if(listItem == active){
                    return (<li className= "nav-item active"
                        id={listItem}
                        onClick= {({listItem}) => this.chngActive(listItem)} >
                        <a className="nav-link" href="#">{listItem} </a>
                    </li>)
                }
                else{
                    return (<li className= "nav-item"
                        id={listItem}
                        onClick= {({listItem}) => this.chngActive(listItem)}>
                        <a className="nav-link" href="#">{listItem} </a>
                    </li>)

                }    
            }        
        )
        return formattedList
    }

    constructor(props) {
        super(props)
        this.state = {
            active: this.props.active,
            listItems: this.modifyList(this.props.active) 
        }

    }

    
    chngActive(nextActiveItem){
        this.setState({
            active: nextActiveItem,
            listItems: this.modifyList(nextActiveItem)
        })
    }


    render() {
        
        return (
            <div>    
            <header className="main-header" id="main-header">    
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Melius</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">    
               
                            <ul className="navbar-nav mr-auto">
                            


                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                <BrowserRouter>
                                    <Link to="/registerforms"><div className='nav-link'>Register</div></Link>
                                        <Route path="registerforms" component={Registerforms}/>
                                        </BrowserRouter>        
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>

                            </ul>
                            <div class="btn-group ml-2" role="group" aria-label="SignOut Btns">
                            <LogOutBtn/>
                            </div>
                    

                </div>
                </nav>  
            </header>
            </div>
        )
    }
}

export default HeaderNavBar
