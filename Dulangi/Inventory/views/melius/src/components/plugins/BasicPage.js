import React, { Component } from 'react'
import HeaderNavBar from './HeaderNavBar';
import SideBar from './SideBar';
import Customerreg from '../registerforms/customer/Customerreg.js'
import Table from './Table';


class BasicPage extends Component {
    
    
    render() {
        const listItem= [ 'a',
                        'b',
                        'c',
                        ['d','e','f','g'],
                        'h',
                        ['i','j','k']
                    ];
        
        return (
            <div style={backgroundStyle} >
                
                
               { <HeaderNavBar listItems={listItem} active="testing" />}
               { <div>
                {<SideBar  listItems={listItem}  home="/testing" active="testing" />}
                </div>} 
               <div className="container" style={containerStyle}> 
               <Table/>
               </div>
               
            </div>
        )
    }
}
 
const backgroundStyle = {
    'backgroundColor': 'transparent'
}


const containerStyle = {
    backgroundColor: 'transparent'
}
export default BasicPage


