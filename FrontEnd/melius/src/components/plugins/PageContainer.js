import React, { Component } from 'react'
import './PageContainer.css';
import HeaderNavBar from './HeaderNavBar';
import SideBar from './SideBar';
import Customerreg from '../registerforms/customer/Customerreg.js'

class PageContainer extends Component {
    
    
    render() {
        const listItem= [ "Service Center",
                        "Inventory",
                        "Information Hub"
                    ];
        return (
            <div style={backgroundStyle} >
                { <HeaderNavBar listItems={listItem} active="a" />}       
            </div>
        )
    }
}
 
const backgroundStyle = {
    'backgroundColor': '#f0f0f0'
}
export default PageContainer
