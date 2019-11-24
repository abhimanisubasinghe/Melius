import React from 'react'
import {Link} from 'react-router-dom'

export default function WelcomeBtn(props) {
    return (
        <div >
            <Link to={props.link}><button type="button" class="btn btn-info btn-lg " style={btnStyle}>{props.newPage}</button></Link>
        </div>
    )
}

const btnStyle = {
    padding: '30px 50px',
    fontSize: '20px'
}