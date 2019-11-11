import React, { Component } from 'react'
import './BasicPage.css';
import HeaderNavBar1 from './HeaderNavBar';
import CurtainSideBar from './CurtainSideBar';
import SideBar from './SideBar';


class BasicPage extends Component {
    
    
    render() {
        const listItem= ['a','b','c'];

        return (
            <div>
                
                {/*<CurtainSideBar/>*/}
                <HeaderNavBar1 listItems={listItem} active="a" />
                <div>
                {<SideBar/>}
                </div>
            </div>
        )
    }
}

export default BasicPage
