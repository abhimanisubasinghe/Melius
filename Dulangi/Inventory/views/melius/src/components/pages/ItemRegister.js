import React from 'react'
import HeaderNavBar from '../plugins/HeaderNavBar'
import SideBar from '../plugins/SideBar';
import Customerreg from '../registerforms/customer/Customerreg'
import Itemregister from '../item/Itemregister';

export default function CustomerRegister() {
    const headerlistItem= [ "Service Center",
                        "Inventory",
                        "Information Hub"
                    ];
    const listItem= [ 
                        ['Item','Register','View']
                    ];

    return (
        
        <div style={backgroundStyle}>
        { <HeaderNavBar listItems={headerlistItem} active="a" />}       
            <SideBar listItems={listItem} home="/inventory" active="item"/>}
            <Itemregister/>
        </div>
    )
}

const backgroundStyle = {
    'backgroundColor': '#f0f0f0'
}