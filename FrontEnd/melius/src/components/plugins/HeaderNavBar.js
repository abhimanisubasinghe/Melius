import React, { Component } from 'react'

class HeaderNavBar1 extends Component {
    
    pickActive(active,listitem){
        if(active==listitem)
            return "nav-item active"
        else
            return "nav-item"
    }
    
    
    constructor(props) {
        super(props)
        let formattedList = this.props.listItems.map(listItem => 
            {
                if(listItem == this.props.active){
                    return (<li className= "nav-item active"
                        id={listItem}
                        onClick= {(listItem) => this.chngActive} >
                        <a className="nav-link" href="#">{listItem} </a>
                    </li>)
                }
                else{
                    return (<li className= "nav-item"
                        id={listItem}
                        onClick= {(listItem) => this.chngActive}>
                        <a className="nav-link" href="#">{listItem} </a>
                    </li>)

                }    
            }        
        )
        this.state = {
            active: this.props.active,
            listItems: formattedList 
        }

        this.chngList = this.chngList.bind(this)

    }

    chngList(){
        const formattedList = this.props.listItems.map(listItem => 
            <li className= "nav-item active"
                 id={listItem}>
                <a className="nav-link" href="#">{listItem} </a>
            </li>    
            )
        this.setState(
            {listItems: {formattedList}}
        )
        console.log(formattedList)
    }   
    
    chngActive(nextActiveItem){
        this.setState({
            active: nextActiveItem
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
                        {this.state.listItems}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                </nav>  
            </header>
            </div>
        )
    }
}

export default HeaderNavBar1
