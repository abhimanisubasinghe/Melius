import React, { Component } from 'react'

class DropDown extends Component {

    
    modifyList(head){
        let formattedList = this.props.options.map(function(option){ 
            if(option!= head)
                return (<a href="#">{option}</a> )       
            }    
        )
        return formattedList
    }
    
    modifyTitle(head){
        let modifiedTitle = this.props.options.map(function(option){ 
            if(option== head)
                return (<a href="#">{option}</a> )       
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
            options : this.modifyList(head),
            title : this.modifyTitle(head)
        }
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