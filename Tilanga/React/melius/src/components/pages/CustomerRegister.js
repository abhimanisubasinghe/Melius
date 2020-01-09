import React from 'react'
import HeaderNavBar from '../plugins/HeaderNavBar'
import SideBar from '../plugins/SideBar';
import Customerreg from '../registerforms/customer/Customerreg'

export default function CustomerRegister() {
    const headerlistItem= [ "Service Center",
                        "Inventory",
                        "Information Hub"
                    ];
    const listItem= [ 
                        ['Customer','Register','View'],
                        ['Vehicle','Register','View'],
                        ['Service','Register','View'],
                        ['Appointments','Register','View']
                    ];
        

    return (
        
        <div style={backgroundStyle}>
        { <HeaderNavBar listItems={headerlistItem} active="a" />}       
            <SideBar listItems={listItem} home="/servicecenter" active="customer"/>}
            <Customerreg/>
        </div>
    )
}

const backgroundStyle = {
    'backgroundColor': '#f0f0f0'
}