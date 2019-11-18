import React, { Component } from 'react'
import './PageContainer.css';
import HeaderNavBar from './HeaderNavBar';


class PageContainer extends Component {
    
    
    render() {
        const listItem= [ "ServiceCenter",
                        "Inventory",
                        "InformationHub"
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
