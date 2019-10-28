import React, { Component } from 'react'
import './BasicPage.css';
import HeaderNavBar from './HeaderNavBar';
import CurtainSideBar from './CurtainSideBar';
import SideBar from './SideBar';

class BasicPage extends Component {
    render() {
        return (
            <div>
                <HeaderNavBar/>
                <CurtainSideBar/>
                <SideBar/>
            </div>
        )
    }
}

export default BasicPage
