import React from 'react'
import PageContainer from '../plugins/PageContainer'
import SideBar from '../plugins/SideBar';
import './Inventory.css';

export default function Inventory() {
    
    const listItem= [ 
                        ['Item','Register','View']
                    ];
        

    return (
        
        <div style={backgroundStyle}>
            <PageContainer/>
            <SideBar listItems={listItem} active="" />}
        </div>
    )
}

const backgroundStyle = {
    backgroundImage: 'url(./pic1.jpg)',
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat : 'no-repeat',
    backgroundSize : 'cover' 
}