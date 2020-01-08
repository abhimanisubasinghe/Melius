import React from 'react'

export default function WelcomeBtn(props) {
    return (
        <div >
            <button type="button" class="btn btn-primary btn-lg ">{props.newPage}</button>
        </div>
    )
}
