import React, { Component } from 'react'
import './SideBar.css';
import DropDown from './DropDown';

class SideBar extends Component {
    
    orginalList = this.props.listItems
    
    modifyList(active){
        let formattedList = this.props.listItems.map(function(listItem){
            if(listItem.length==1)
                return <a href="#">{listItem[0]}</a>
            else{
                return (
                <React.Fragment>
                    <DropDown options={listItem} title={listItem[0]}/>
                </React.Fragment>
                )
            }
        } 
                    
        )

        return formattedList
    }



    constructor(props) {
        super(props)
        this.state = {
            listItems: this.modifyList(this.props.active) 
        }
        console.log(this.props.listItems)
    }

    
    chngActive(nextActiveItem){
        this.setState({
            listItems: this.modifyList(nextActiveItem)
        })
    }

    render() {
        return (
            <div>
                <div className="sidenav">
                    {this.state.listItems}
                </div>
            </div>
        )
    }
}






export default SideBar
