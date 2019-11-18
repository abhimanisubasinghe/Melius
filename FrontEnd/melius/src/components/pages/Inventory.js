import React from 'react'
import PageContainer from '../plugins/PageContainer'
import SideBar from '../plugins/SideBar';

export default function Inventory() {
    
    const listItem= [ 
                        ['Item','Register','View']
                    ];
        

    return (
        
        <div>
            <PageContainer/>
            <SideBar listItems={listItem} active="" />}
        </div>
    )
}
