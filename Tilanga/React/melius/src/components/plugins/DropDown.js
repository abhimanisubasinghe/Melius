import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class DropDown extends Component {

    home = this.props.home
    
    modifyList(head,address){
        let formattedList = this.props.options.map(function(option){ 
            if(option!= head){
                let link = "/"+address
                console.log("first part"+link)
                let temp = link+"_"
                console.log("first part"+temp)
                let final = temp+ option
                //let link = this.home
                return <Link to={final}>{option}</Link>
            }    
            }    
        )
        return formattedList
    }
    
    modifyTitle(head,address){
        let modifiedTitle = this.props.options.map(function(option){ 
            if(option== head){
                //let link = address+"/"+option
               // let link = this.home+"_"+option
               let link = address
               console.log(link)
                return <Link to={link} >{option}</Link>
            }      
            }    
        )
        return modifiedTitle
    }

    constructor(props) {

        super(props)
        const head= this.props.title
        this.state = {
            active : false,
            selected : -1,
            options : this.modifyList(head,this.props.active),
            title : this.modifyTitle(head,this.props.home)
        }
        console.log(this.props.active)
    }
    
    toggleDropdown() {
        this.setState({
          active: !this.state.active
        });
    }

    visible(){
        if(this.state.active)
            return this.state.options

    }
    
    render() {
       
        return (
            <React.Fragment>
                
                <div onClick={()=> this.toggleDropdown()} style={listStyle}>{this.state.title}</div>
                <ul >{this.visible()}</ul>
            </React.Fragment>
        )
    }
}

export default DropDown
const listStyle = {
    'cursor' : 'pointer',
    'text-align' : 'center',
    'left-padding' : '1px'
}