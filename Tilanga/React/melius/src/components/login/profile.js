import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            userName: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decode = jwt_decode(token)
        this.setState({
            userName: decode.userName
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>PROFILE</h1>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>User Name</td>
                                <td>{this.state.userName}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                {/* <td>{this.state.last_name}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default {Profile}