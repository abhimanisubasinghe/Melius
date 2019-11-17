import React from 'react'
import PageContainer from '../plugins/PageContainer'
import SideBar from '../plugins/SideBar';

export default function ServiceCenter() {
    
    const listItem= [ 'a',
                        'b',
                        'c',
                        ['d','e','f','g'],
                        'h',
                        ['i','j','k']
                    ];
        

    return (
        
        <div>
            <PageContainer/>
            <SideBar listItems={listItem} active="a" />}
        </div>
    )
}
