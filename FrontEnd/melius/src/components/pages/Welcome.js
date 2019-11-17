import React from 'react'
import BasicPage from '../plugins/BasicPage'
import HeaderNavBar from '../plugins/HeaderNavBar'
import WelcomeBtn from '../plugins/WelcomeBtn'
import PageContainer from '../plugins/PageContainer'

export default function Welcome() {
    return (
        <React.Fragment>
            <PageContainer/>
            <div className="jumbotron" style={jumbotronStyle}>
                <WelcomeBtn newPage="Service Center"/>
                <div className ="col-md-6">
                                                        <span className="glyphicon glyphicon-pencil"></span>
                                                </div>
                <WelcomeBtn newPage="Inventory"/>
                <WelcomeBtn newPage="Information hub"/>
            </div>              
        </React.Fragment>
    )
}

const jumbotronStyle = {
    background: '#f0f0f0'
}