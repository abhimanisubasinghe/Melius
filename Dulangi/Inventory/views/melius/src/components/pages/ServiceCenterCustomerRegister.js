import React from 'react'
import PageContainer from '../plugins/PageContainer'
import SideBar from '../plugins/SideBar';

export default function ServiceCenterCutomerRegister() {
    
    const listItem= [ 
                        ['Customer','Register','View'],
                        ['Vehicle','Register','View'],
                        ['Service','Register','View'],
                        ['Appointments','Register','View']
                    ];
        

    const active = "Customer"
    const home = "/servicecenter/"                
    return (
        
        <div>
            <PageContainer/>
        </div>
    )
}
