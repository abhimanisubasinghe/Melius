import React, { Component } from 'react'
//import './BasicPage.css';
import HeaderNavBar from './HeaderNavBar';
import SideBar from './SideBar';
import Customerreg from '../registerforms/customer/Customerreg.js'

class BasicPage extends Component {
    
    
    render() {
        const listItem= [ 'a',
                        'b',
                        'c',
                        ['d','e','f','g'],
                        'h',
                        ['i','j','k']
                    ];
        const options = ['Apple', 'Orange', 'Pear', 'Mango'];
        return (
            <div style={backgroundStyle} >
                
                
               { <HeaderNavBar listItems={listItem} active="a" />}
               { <div>
                {<SideBar  listItems={listItem} active="a" />}
                </div>} 
                
                {<Customerreg></Customerreg>}
               
            </div>
        )
    }
}
 
const backgroundStyle = {
    'backgroundColor': '#f0f0f0'
}
export default BasicPage
