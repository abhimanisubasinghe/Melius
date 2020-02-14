import React, { Component } from 'react';
//import jwt_decode from 'jwt-decode';
//import axios from "axios";

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount() {
        if (this.props.history.location.state)
    {
        console.log('history')
        let params = this.props.history.location.state;
        //const decode = jwt_decode(params)
        this.setState({ 
            name: params.detail.name,
            first_name: params.detail.name,
            email: params.detail.name
        });
        //console.log(this.setState.first_name);
        console.log(params.detail.first_name)
    }
        // 
        //coaxios.post('http://localhost:3010/users/login')
        //   .then(res => {
        //     const services = res.data;
        //     this.setState({ services });
        //   })
        //const token = localStorage.res.data;
        //console.log(token)
         //const decode = jwt_decode(token)
         console.log('tptptptptpt')
         //console.log(localStorage.detail.first_name);
         console.log('xmxmxmxmxmxmxmx');
        // this.setState({
        //     //first_name: decode.first_name,
        //     //first_name: decode.first_name,
        //     // last_name: decode.last_name,
        //     // email: decode.email
        //     //first_name: "Tilanga",
        //     //first_name: localStorage.usertoken.first_name ,
        //     last_name: "Pramith",
        //     email: "pramithvidusara@gmail.com"
        // })
    }

    render() {
        return(
            <div className='container'>
                <div className='jumbotron mt-5'>
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 ms-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                {/* <td>{this.props.history.location.state.email}</td> */}
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email
                                }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile