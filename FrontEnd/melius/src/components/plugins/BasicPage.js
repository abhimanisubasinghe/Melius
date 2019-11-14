import React, { Component } from 'react'
import './BasicPage.css';
import HeaderNavBar from './HeaderNavBar';
import SideBar from './SideBar';


class BasicPage extends Component {
    
    
    render() {
        const listItem= ['a','b','c'];

        return (
            <div>
                
                {/*<CurtainSideBar/>*/}
                <HeaderNavBar listItems={listItem} active="a" />
                <div>
                {<SideBar  listItems={listItem} active="a" />}
                </div>
            </div>
        )
    }
}

export default BasicPage
