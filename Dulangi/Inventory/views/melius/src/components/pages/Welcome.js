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
                <WelcomeBtn newPage="Service Center" link="/servicecenter"/>
            </div>
            <div className="jumbotron" style={jumbotronStyle}>
                <WelcomeBtn newPage="Inventory" link="/inventory"/>
            </div>
            <div className="jumbotron" style={jumbotronStyle}>
                <WelcomeBtn newPage="Infromation Hub" link="/informationhub"/>
            </div>         
                     
        </React.Fragment>
    )
}

const jumbotronStyle = {
    backgroundColor: 'transparent',
    paddingTop: "63px",
}