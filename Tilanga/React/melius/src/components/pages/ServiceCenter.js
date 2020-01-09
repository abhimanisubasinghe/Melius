import React from 'react'
import PageContainer from '../plugins/PageContainer'
import SideBar from '../plugins/SideBar';

export default function ServiceCenter() {
    
    const listItem= [ 
                        ['Customer','Register','View'],
                        ['Vehicle','Register','View'],
                        ['Service','Register','View'],
                        ['Appointments','Register','View']
                    ];
        

    return (
        
        <div>
            <PageContainer/>
            <SideBar listItems={listItem} active="" />}
        </div>
    )
}
