import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './SideBar.css';
import DropDown from './DropDown';

class SideBar extends Component {
    
    orginalList = this.props.listItems
    active = this.props.active
    home = this.props.home
    name = this.props.name
    
    modifyList(active,address,home){
        let formattedList = this.props.listItems.map(function(listItem){
            if(listItem.length==1){
                //let link = address+"/"+listItem
                let link = this.props.home
                return <Link to={link}>{listItem[0]}</Link>
            }    
            else{
                return (
                <React.Fragment>
                    <DropDown options={listItem} title={listItem[0]} home={home} active={listItem[0]}/>
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
            listItems: this.modifyList(this.props.active,this.props.link,this.props.home) 
        }
        console.log(this.orginalList)
        console.log(this.active)
        console.log(this.home)
        console.log(this.name)
        console.log("list itmes"+this.props.listItems+ " home address " +this.props.home +" active "+this.props.active)
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
