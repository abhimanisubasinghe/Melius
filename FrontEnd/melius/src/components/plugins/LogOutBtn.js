import React, { Component } from 'react'

class LogOutBtn extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            hover: false
        }
    }
    
    hoverOn(){
        this.setState({
            hover: true 
        })
    }

    hoverOff(){
        this.setState({
            hover: false 
        })
    }
    
    hoverFun(){
        
    }

    render() {
        let lbl = "SignOut"
        return (
                
            <div>
                <button 
                    type="button" 
                    class="btn btn-secondary" 
                    onMouseEnter={() => this.hoverOn} 
                    onMouseLeave={() => this.hoverOff}
                    >
                    <i class="fas fa-sign-out-alt"></i>
                    {this.state.hover} 
                    
                </button> 
            </div>
        )
    }
}

export default LogOutBtn
