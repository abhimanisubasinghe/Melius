import React from 'react'
import PageContainer from '../plugins/PageContainer'
import SideBar from '../plugins/SideBar';
import './Inventory.css';

export default function Inventory() {
    
    const listItem= [ 
                        ['Item','Register','View']
                    ];
        

    return (
        
        <div style={backStyle}>
            <PageContainer/>
            <SideBar listItems={listItem} active="" />}
        </div>
    )
}

const backStyle = {
    
    backgroundImage: "url(./pic1.jpg)"
}