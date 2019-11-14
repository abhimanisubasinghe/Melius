import React, { Component } from 'react'
import './SideBar.css';

class SideBar extends Component {
    
    orginalList = this.props.listItems
    
    modifyList(active){
        let formattedList = this.props.listItems.map(listItem => 
            <a href="#">{listItem}</a>        
        )
        return formattedList
    }

    constructor(props) {
        super(props)
        this.state = {
            listItems: this.modifyList(this.props.active) 
        }

    }

    
    chngActive(nextActiveItem){
        this.setState({
            listItems: this.modifyList(nextActiveItem)
        })
    }

    render() {
        return (
            <div>
                <div class="sidenav">
                    {this.state.listItems}
                </div>
            </div>
        )
    }
}

export default SideBar
