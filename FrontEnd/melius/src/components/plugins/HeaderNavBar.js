import LogOutBtn from './LogOutBtn'
import React, { Component } from 'react'

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
            <div style={navbar}>    
            <header className="main-header" id="main-header" >    
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
                <a className="navbar-brand" href="#">Melius</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">    
                    <ul className="navbar-nav mr-auto">
                        {this.state.listItems}
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

const navbar = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "9999"  
}
